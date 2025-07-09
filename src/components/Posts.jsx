import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/postServices';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        const data = await getPosts();
        console.log(data);
        setPosts(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="my-10 mx-20 font-sans">
            <h1 className="text-2xl font-bold mb-1">Latest Posts</h1>
            <p className="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, nostrum!</p>

            <section>
                {posts.map((item) => (
                    <div
                        key={item.id}
                        className="border-b border-blue-500 pb-1 mb-4"
                    >
                        <h4 className="font-semibold">{item.title}</h4>
                        <p>{item.body}</p>
                        <p><b>userId:</b> {item.userId}</p>
                    </div>
                ))}
            </section>
        </section>
    );
}
