import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PostCard from "./PostCard";

import "swiper/css";

export default function PostsSlider({ posts }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">

      {/* LEFT ARROW */}
      <button
        ref={prevRef}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-20
                   w-10 h-10 rounded-full bg-white shadow
                   flex items-center justify-center text-black"
      >
        <FaChevronLeft />
      </button>

      {/* RIGHT ARROW */}
      <button
        ref={nextRef}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-20
                   w-10 h-10 rounded-full bg-white shadow
                   flex items-center justify-center text-black"
      >
        <FaChevronRight />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <PostCard post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
