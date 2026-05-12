import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  const postUrl = `/${post.title_slug}`;

  const date = new Date(post.created_at).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const imageUrl = post.image_big
    ? `https://news.quickhomeloan.in/${post.image_big}`
    : "";

  return (
    <Link
      to={postUrl}
      className="flex flex-col gap-4 p-4 rounded-2xl border border-gray-200 transition bg-white h-full"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl bg-gray-100 aspect-[16/9]">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 min-w-0">
        <div>
          {/* Category */}
          <span
            className="inline-block px-3 py-1 text-xs font-semibold rounded text-white mb-2"
            style={{ backgroundColor: post.category_color }}
          >
            {post.category_name}
          </span>

          {/* Title */}
          <h3 className="text-gray-900 text-lg font-semibold line-clamp-2">
            {post.title}
          </h3>
        </div>

        {/* Meta */}
        <div className="mt-auto pt-3 text-xs text-gray-500 flex gap-2">
          <span>{post.author_username}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
}