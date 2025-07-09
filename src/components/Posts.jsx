import React, { useEffect, useState } from 'react'
import { getPosts } from '../services/postServices';
import { Link } from 'react-router-dom';

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
            <p className="mb-4 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, nostrum!</p>

            <section>
                {posts.map((item) => (
                    <div
                        key={item.id}
                        className="border-b border-blue-500 pb-3 mb-6"
                    >
                        <h4 className="font-semibold text-lg text-gray-800">{item.title}</h4>
                        <p className="text-gray-700">{item.body}</p>
                        <p className="text-sm text-gray-600"><b>userId:</b> {item.userId}</p>
                        
                        <Link
                            to={`/post/${item.id}`}
                            className="inline-block mt-2 text-sm bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Editar Publicación
                        </Link>
                    </div>
                ))}
            </section>
        </section>
    );
}
