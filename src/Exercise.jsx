import React from "react";
import PostCard from "./PostCard";
import { staticPosts } from "./postsData";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6 px-48">
        <h1 className="text-3xl font-bold text-center mb-6 text-special-red2">
          Post Cards
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-full mx-auto">

          {staticPosts.map((post) => (
            <PostCard
              key={post.id}
              {...post}
              userId={post.userId} 
            />
          ))}

        </div>
      </div>
    </>
  );
}

export default Exercise;