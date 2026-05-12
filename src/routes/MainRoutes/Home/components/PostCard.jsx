import { Link } from "react-router-dom";

export default function PostCard({ post }) {

  // Generate full external URL
  const postUrl = `https://news.quickhomeloan.in/${post.title_slug
    ?.replace(/^\/+/, "")
    ?.replace(/\/+$/, "")}`;

  const date = new Date(post.created_at).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const imageUrl = post.image_big
    ? `https://news.quickhomeloan.in/${post.image_big}`
    : "";

  return (
    <a
      href={postUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group flex flex-col h-full
        bg-white border border-gray-200
        rounded-2xl overflow-hidden
        hover:shadow-xl transition-all duration-300
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/9] bg-gray-100">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={post.title}
            className="
              w-full h-full object-cover
              group-hover:scale-105
              transition-transform duration-500
            "
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">

        {/* Category */}
        <div className="mb-3">
          <span
            className="
              inline-flex items-center
              px-3 py-1
              text-xs font-semibold
              rounded-full text-white
            "
            style={{
              backgroundColor: post.category_color || "#111827",
            }}
          >
            {post.category_name}
          </span>
        </div>

        {/* Title */}
        <h3
          className="
            text-gray-900 text-lg md:text-xl
            font-semibold leading-7
            line-clamp-2
            group-hover:text-[#0E7A53]
            transition-colors duration-300
          "
        >
          {post.title}
        </h3>

        {/* Meta */}
        <div className="mt-auto pt-5 flex items-center gap-2 text-sm text-gray-500">

          <span className="truncate">
            {post.author_username}
          </span>

          <span>•</span>

          <span>{date}</span>
        </div>
      </div>
    </a>
  );
}