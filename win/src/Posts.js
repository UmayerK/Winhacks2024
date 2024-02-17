import React, { useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      text: "F",
      scamLikelihood: .5
    }
  ]);

  const handleLikeClick = (postId) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, liked: !post.liked } : post
      )
    );
  };


  return (
    <div className="max-w-lg relative ">
      {posts.map(post => (
        <div key={post.id}>
          <textarea
            placeholder="Posts Appear Here"
            className="w-full h-32 border border-gray-300 rounded-lg" // Added pl-8 for padding-left
            readOnly // Make the textarea read-only
          />
          {/* Heart icon */}
          <span
            className={`absolute left-2 top-2/4 transform  text-xl mt-5 ${
              post.liked ? "text-red-500" : "text-gray-500"
            } cursor-pointer`}
            onClick={() => handleLikeClick(post.id)}
          >
            ❤️
          </span>
          {/* Number next to heart */}
          <span className="absolute left-7 top-2/4 transform  text-sm text-gray-500 mt-6 ml-1 ">
            69
          </span>
          {/* Scam likelihood bar */}
          <div className="mt-1">
            <div className="w-full h-6 bg-gray-200 rounded-lg overflow-hidden">
              <div
                className="h-full bg-red-500"
                style={{ width: `${post.scamLikelihood}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
