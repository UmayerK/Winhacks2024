function Posts({ posts, setPosts }) {
  const handleLikeClick = (index) => {
    setPosts((prevPosts) =>
      prevPosts.map((post, i) =>
        i === index ? { ...post, liked: !post.liked } : post
      )
    );
  };

  return (
    <div className="w-[512px] mt-[600px] mb-16">
      {posts.map((post, index) => (
        <div key={index} className="rounded-lg bg-white shadow-md p-4 mb-4">
          <div className="w-[101%] text-black text-lg rounded-lg text-left">
            {post.text}
          </div>

          <div className="mt-2 flex items-center">
            <div
              className={"text-xl cursor-pointer"}
              onClick={() => handleLikeClick(index)}
            >
              {post.liked ? "❤️" : "🤍"}
            </div>
            <div className="flex-grow mx-3 mt-1">
              <div className="h-6 bg-gray-200 rounded-lg overflow-hidden text-md flex">
                <div
                  className="h-full bg-red-500 text-white items-center text-right pr-2"
                  style={{ width: `${post.rating}%` }}
                >
                  {post.rating >= 50
                    ? post.rating.toFixed(2) + "% chance of scam!"
                    : ""}
                </div>
                <div className="text-black flex-grow text-left pl-2">
                  {post.rating < 50
                    ? post.rating.toFixed(2) + "% chance of scam"
                    : ""}
                </div>
              </div>
            </div>
            <div
              className="text-xl cursor-pointer"
              onClick={() => {
                setPosts((prevPosts) => {
                  return prevPosts.filter((post, i) => i !== index);
                });
              }}
            >
              {"🗑️"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
