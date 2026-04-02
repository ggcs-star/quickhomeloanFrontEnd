export default function PostCard({ post }) {
  const postUrl = `https://news.quickhomeloan.in/${post.title_slug}`;

  const handleClick = (e) => {
    e.preventDefault();

    // ❌ DO NOT overwrite active category here
    window.location.href = postUrl;
  };

  const date = new Date(post.created_at).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <a
      href={postUrl}
      onClick={handleClick}
      className="block relative h-72 rounded-2xl overflow-hidden bg-gray-300 cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-400" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="absolute top-4 left-4 z-10">
        <span
          className="px-3 py-1 text-xs font-semibold rounded text-white"
          style={{ backgroundColor: post.category_color }}
        >
          {post.category_name}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <h3 className="text-white text-lg font-semibold line-clamp-2">
          {post.title}
        </h3>

        <div className="mt-2 text-xs text-gray-300 flex gap-2">
          <span>{post.author_username}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </a>
  );
}
