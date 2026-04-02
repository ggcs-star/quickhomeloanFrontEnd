import { useEffect, useState } from "react";
import CategorySlider from "./CategorySlider";
import ReelBlock from "./ReelBlock";
import PostCard from "./PostCard";
import PostsSlider from "./PostsSlider";

const CATEGORY_API = "https://news.quickhomeloan.in/api/category";
const POSTS_API = "https://news.quickhomeloan.in/api/posts";

export default function RealEstatePosts() {
  const [categories, setCategories] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [loading, setLoading] = useState(true);

  /* ---------- FETCH CATEGORIES ---------- */
  useEffect(() => {
    fetch(CATEGORY_API)
      .then((res) => res.json())
      .then((json) => {
        setCategories(json?.data?.categories || []);
        const saved = sessionStorage.getItem("activeCategory");
        setActiveCategory(saved || "ALL");
      })
      .catch(console.error);
  }, []);

  /* ---------- FETCH POSTS ---------- */
  useEffect(() => {
    fetch(POSTS_API)
      .then((res) => res.json())
      .then((json) => {
        setAllPosts(json?.data?.posts || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  /* ---------- FILTER POSTS ---------- */
  useEffect(() => {
    if (activeCategory === "ALL") {
      setFilteredPosts(allPosts);
    } else {
      setFilteredPosts(
        allPosts.filter(
          (p) => String(p.category_id) === String(activeCategory)
        )
      );
    }
  }, [activeCategory, allPosts]);

  /* ---------- CATEGORY CHANGE ---------- */
  const handleCategoryChange = (id) => {
    sessionStorage.setItem("activeCategory", id);
    setActiveCategory(id);
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-[1280px] mx-auto px-6">

        <CategorySlider
          categories={categories}
          active={activeCategory}
          onChange={handleCategoryChange}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-1">
            <ReelBlock />
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-64 rounded-xl bg-gray-200 animate-pulse"
                  />
                ))}
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="h-64 flex items-center justify-center text-gray-500">
                No posts found
              </div>
            ) : filteredPosts.length <= 3 ? (
              /* GRID */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              /* SLIDER */
              <PostsSlider posts={filteredPosts} />
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
