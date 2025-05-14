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

interface RSSFeed {
    rss: {
        channel: Array<{
            item: RSSItem[];
        }>;
    };
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

    const firstImg = doc.querySelector('img');
    const imageUrl = firstImg?.getAttribute('src') || '/api/placeholder/600/400';

    const excerpt = doc.body.textContent?.trim().slice(0, 150) + '...' || '';

    return { imageUrl, excerpt };
}

function parseRSSFeed(data: string, username: string): Promise<Response> {
    return new Promise((resolve) => {
        parseString(data, (err: Error | null, result: RSSFeed) => {
            if (err) {
                resolve(NextResponse.json(
                    { error: 'Failed to parse RSS feed' },
                    { status: 500 }
                ));
                return;
            }

            try {
                const items = result.rss.channel[0].item;
                const posts: BlogPost[] = items
                    .slice(0, 2)
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
            } catch {
                resolve(NextResponse.json(
                    { error: 'Failed to process RSS feed data' },
                    { status: 500 }
                ));
            }
        });
    });
}

export async function GET(request: Request): Promise<Response> {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if (!username) {
        return NextResponse.json(
            { error: 'Username is required' },
            { status: 400 }
        );
    }

    try {
        const response = await axios.get(`https://medium.com/feed/@${username}`, {
            headers: { 'Content-Type': 'application/rss+xml',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
             },
        });

        return parseRSSFeed(response.data, username);
    } catch (error) {
        console.error('Error fetching Medium feed:', error);
        return NextResponse.json(
            { error: 'Failed to fetch Medium RSS feed' },
            { status: 500 }
        );
    }
}