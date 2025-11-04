import React from "react";
// import UserCard from "./UserCard"; //
import PostCard from "./PostCard";
import postsData from "./postsData";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Section User Cards - DIHAPUS atau DI-COMMENT */}
        {/*
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <UserCard 
            name="Surya"
            email="Surya@gmail.com"
            street="JL. Eboni"
            city="Semarang"
          />
          <UserCard 
            name="Tetuko"
            email="Tetuko@gmail.com"
            street="JL. Angsana"
            city="Semarang"
          />
          <UserCard
            name="Bren"
            email="Bren@gmail.com"
            street="JL. Kelud"
            city="Semarang"
          />
        </div>
        */}

        {/* Hanya menampilkan Post Cards saja */}
        <h1 className="text-3xl font-bold text-center mb-6 text-red-600">
          Post Cards
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 max-w-8xl mx-auto">
          {postsData.map((post) => (
            <PostCard 
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise;