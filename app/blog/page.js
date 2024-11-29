import React from 'react';  
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';


const dirContent = fs.readdirSync("content", "utf-8")

const blogs = dirContent.map(file=>{
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
    const {data} = matter(fileContent)
    return data
})


// const blogs = [
//   {
//     title: "Exploring Next.js 13 Features",
//     description:
//       "Dive into the latest features of Next.js and how they can revolutionize your web development workflow.",
//     slug: "exploring-nextjs-13-features",
//     date: "November 18, 2024",
//     author: "Sopan Bharkad",
//     image: "https://via.placeholder.com/400x200.png?text=Next.js+Features",
//   },
//   {
//     title: "The Rise of Tailwind CSS",
//     description:
//       "Understand why Tailwind CSS is becoming the go-to choice for developers worldwide.",
//     slug: "the-rise-of-tailwind-css",
//     date: "November 15, 2024",
//     author: "John Doe",
//     image: "https://via.placeholder.com/400x200.png?text=Tailwind+CSS",
//   },
//   {
//     title: "Building Responsive Web Apps",
//     description:
//       "Learn how to create responsive web applications with modern tools and techniques.",
//     slug: "building-responsive-web-apps",
//     date: "November 10, 2024",
//     author: "Jane Smith",
//     image: "https://via.placeholder.com/400x200.png?text=Responsive+Web+Apps",
//   },
// ];

const BlogPage = () => {
  return (
    <div className=" py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold  text-center mb-8">
          Latest Blogs
        </h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
                <div className="text-gray-500 text-sm mb-4">
                  <span>{blog.author}</span> &middot; <span>{blog.date}</span>
                </div>
                <Link
                  href={`/blogpost/${blog.slug}`}
                  className={buttonVariants({ variant: "outline" })}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
