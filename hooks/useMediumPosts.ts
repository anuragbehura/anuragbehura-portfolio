import { useState, useEffect } from 'react';
import axios from 'axios';
import type { BlogPost } from '../app/api/medium-feed/route';

export function useMediumPosts(username: string) {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get<BlogPost[]>(`/api/medium-feed?username=${username}`);
                setPosts(data);
                setError(null);
            } catch (err) {
                setError('Failed to fetch blog posts');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadPosts();
    }, [username]);

    return { posts, loading, error };
}