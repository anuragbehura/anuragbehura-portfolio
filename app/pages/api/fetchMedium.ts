import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await axios.get('https://medium.com/feed/@anuragbehura', {
            headers: { 'Content-Type': 'application/rss+xml' },
        });
        res.setHeader('Content-Type', 'application/rss+xml');
        res.status(200).send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch Medium RSS feed' });
    }
}
