import React from 'react';

export default function Welcome() {
    return (
        <section className="flex justify-center items-center my-10 text-center font-sans">
            <section>
                <h1 className="text-[2.3rem] font-bold">Welcome to API Placeholder</h1>
                <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, deleniti accusamus? 
                    Fugit nemo quidem aut repudiandae ratione? Iusto, eaque incidunt.
                </p>
                <div className="mt-6">
                    <button className="bg-[#3D98F4] text-white px-4 py-2 mx-2 rounded-[10px] font-bold">
                        View Posts
                    </button>
                    <button className="px-4 py-2 mx-2 rounded-[10px] font-bold border border-gray-300 hover:bg-gray-100">
                        Create Post
                    </button>
                </div>
            </section>
        </section>
    );
}
