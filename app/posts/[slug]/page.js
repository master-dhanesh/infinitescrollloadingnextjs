import Viewcount from "@/components/Viewcount";
import { getMorePost } from "@/data";
import React, { Suspense } from "react";

const page = async () => {
    const posts = await getMorePost();

    return (
        <div>
            <h1>All Posts</h1>
            <hr />
            <Suspense fallback={<div>Loading Posts count...</div>}>
                <Viewcount count={posts.length} />
            </Suspense>
            <hr />
            {posts &&
                posts.map((data) => (
                    <div key={data.id}>
                        <div className="back">
                            <strong> {data.id}</strong> {data.title}
                        </div>
                        {data.completed}
                    </div>
                ))}
        </div>
    );
};

export default page;
