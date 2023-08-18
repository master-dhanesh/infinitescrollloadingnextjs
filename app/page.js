"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const page = () => {
    const [posts, setPosts] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    const getMorePost = async () => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/todos?_start=${posts.length}&_limit=20`
        );
        const newPosts = await res.json();
        if (newPosts.length === 0) setHasMore(false);
        setPosts((post) => [...post, ...newPosts]);
    };

    useEffect(() => {
        if (posts.length === 0) getMorePost();
    }, []);
    return (
        <>
            <Link href="/posts/1">Posts</Link>
            <hr />
            <InfiniteScroll
                dataLength={posts.length}
                next={getMorePost}
                hasMore={hasMore}
                loader={<h3> Loading...</h3>}
                endMessage={<h4>Nothing more to show</h4>}
            >
                {posts.map((data) => (
                    <div key={data.id}>
                        <div className="back">
                            <strong> {data.id}</strong> {data.title}
                        </div>
                        {data.completed}
                    </div>
                ))}
            </InfiniteScroll>
            <style jsx>
                {`
                    .back {
                        padding: 10px;
                        background-color: dodgerblue;
                        color: white;
                        margin: 10px;
                    }
                `}
            </style>
        </>
    );
};

export default page;
