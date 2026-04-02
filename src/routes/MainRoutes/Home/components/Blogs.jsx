import React from "react";
import { Container } from "../../../../components/Layout";
import blog1 from "../../../../assets/blogs/blog1.jpg";
import blog2 from "../../../../assets/blogs/blog2.jpg";
import blog3 from "../../../../assets/blogs/blog3.jpg";

// Reusable Large Blog Card
const BlogCardLarge = ({ image, category, date, comments, title, link }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="relative">
                <img src={image} alt={title} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition">
                    <a
                        href={image}
                        data-fancybox="gallery"
                        className="bg-white p-3 rounded-full shadow-md"
                    >
                        🔍
                    </a>
                </div>
                {/* <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    {category}
                </div> */}
            </div>
            <div className="p-5">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span>📅 {date}</span>
                    <span>💬 {comments} Comments</span>
                </div>
                <h3 className="text-xl font-semibold hover:text-blue-600 transition">
                    <a href={link}>{title}</a>
                </h3>
            </div>
        </div>
    );
};

// Reusable Small Blog Card
const BlogCardSmall = ({ image, date, comments, title, link }) => {
    return (
        <div className="flex gap-4 mb-6">
            <div className="relative w-40 h-28 flex-shrink-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition">
                    <a
                        href={image}
                        data-fancybox="gallery"
                        className="bg-white p-2 rounded-full shadow-md"
                    >
                        🔍
                    </a>
                </div>
            </div>
            <div className="flex flex-col justify-start">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-1">
                    <span>📅 {date}</span>
                    <span>💬 {comments} Comments</span>
                </div>
                <h3 className="text-base font-medium leading-snug hover:text-blue-600 transition">
                    <a href={link}>{title}</a>
                </h3>
            </div>
        </div>
    );
};

const Blogs = () => {
    const blogs = {
        large: {
            image: blog1,
            category: "Current Account",
            date: "Nov 31, 2022",
            comments: "34",
            title: "Industry’s Imperatives For Sustainability in...",
            link: "blog-single.html",
        },
        small: [
            {
                image: blog2,
                date: "Nov 31, 2022",
                comments: "34",
                title:
                    "Never Worry About What to Do About Banking Again With These Tips",
                link: "blog-single.html",
            },
            {
                image: blog3,
                date: "Nov 31, 2022",
                comments: "34",
                title:
                    "Never Worry About What to Do About Banking Again With These Tips",
                link: "blog-single.html",
            },
        ],
    };

    return (
        <Container>
            <div className="mx-auto">
                <h1 className="text-lg lg:text-3xl font-bold text-start my-6">
                    Our News & Insights
                </h1>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                    {/* Left Large Blog */}
                    <div className="xl:col-span-7">
                        <BlogCardLarge {...blogs.large} />
                    </div>

                    {/* Right Blog List */}
                    <div className="xl:col-span-5">
                        <div className="bg-white">
                            <ul>
                                {blogs.small.map((item, idx) => (
                                    <li key={idx} className="">
                                        <BlogCardSmall {...item} />
                                        <hr className="text-gray-300 py-4" />

                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <div className="mt-6">
                                <a
                                    href="blog.html"
                                    className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
                                >
                                    More News <span>➡️</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Blogs;
