import React from "react";
import PostCard from "./PostCard";
import { staticPosts } from "./postsData";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-special-red">
          Post Cards
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          
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