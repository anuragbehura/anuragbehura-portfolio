import { NextResponse } from 'next/server';
import axios from 'axios';
import { parseString } from 'xml2js';
import { JSDOM } from 'jsdom';

interface RSSItem {
    title: string[];
    link: string[];
    pubDate: string[];
    'content:encoded': string[];
    category?: string[];
}

export interface BlogPost {
    title: string;
    link: string;
    pubDate: string;
    content: string;
    author: string;
    categories: string[];
    imageUrl: string;
    excerpt: string;
}

function extractImageAndExcerpt(content: string): { imageUrl: string; excerpt: string } {
    const dom = new JSDOM(content);
    const doc = dom.window.document;

    // Try to find the first image
    const firstImg = doc.querySelector('img');
    const imageUrl = firstImg?.getAttribute('src') || '/api/placeholder/600/400';

    // Get text content for excerpt
    const excerpt = doc.body.textContent?.trim().slice(0, 150) + '...' || '';

    return { imageUrl, excerpt };
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');
    const limit = 2; // Limiting to 2 most recent posts

    if (!username) {
        return NextResponse.json(
            { error: 'Username is required' },
            { status: 400 }
        );
    }

    try {
        const response = await axios.get(`https://medium.com/feed/@${username}`, {
            headers: { 'Content-Type': 'application/rss+xml' },
        });

        return new Promise((resolve) => {
            parseString(response.data, (err, result) => {
                if (err) {
                    resolve(NextResponse.json(
                        { error: 'Failed to parse RSS feed' },
                        { status: 500 }
                    ));
                    return;
                }

                const items = result.rss.channel[0].item;
                const posts: BlogPost[] = items
                    .slice(0, limit) // Only take the first 2 posts
                    .map((item: RSSItem) => {
                        const content = item['content:encoded'][0];
                        const { imageUrl, excerpt } = extractImageAndExcerpt(content);

                        return {
                            title: item.title[0],
                            link: item.link[0],
                            pubDate: new Date(item.pubDate[0]).toISOString(),
                            content,
                            author: username,
                            categories: item.category || [],
                            imageUrl,
                            excerpt
                        };
                    });

                resolve(NextResponse.json(posts));
            });
        });
    } catch (error) {
        console.error('Error fetching Medium feed:', error);
        return NextResponse.json(
            { error: 'Failed to fetch Medium RSS feed' },
            { status: 500 }
        );
    }
}