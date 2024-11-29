"use client";
import { Button } from "@/components/ui/button";
import Typed from "typed.js";
import React, { useRef, useEffect } from "react";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '<span style="color: #FF5733;">Coding</span>',
        '<span style="color: #33FF57;">Web Development</span>',
        '<span style="color: #3357FF;">Software Engineering</span>',
        '<span style="color: #FF33A1;">MERN Developer</span>',
      ],
      typeSpeed: 50, // Speed of typing
      backSpeed: 30, // Speed of backspacing
      loop: true, // Enable infinite loop
      backDelay: 1000, // Delay before backspacing
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for
            community <br className="hidden lg:block" /> components using{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to{" "}
            <br className="hidden lg:block" /> bootstrap your new apps, projects
            or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            ></form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Choose the plan that suits you best
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Basic Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Basic
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $10/month
                </p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>10GB Storage</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>Basic Support</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>Single User</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Weekly Updates
                  </li>
                </ul>
                <Button className="mx-1" variant="outline">
                  Choose Plan
                </Button>
              </div>
            </div>
            {/* Standard Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Standard
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $20/month
                </p>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">
                  Bestseller
                </span>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    50GB Storage
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Priority Support
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Up to 5 Users
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Daily Updates
                  </li>
                </ul>
                <Button className="mx-1" variant="outline">
                  Choose Plan
                </Button>
              </div>
            </div>
            {/* Premium Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Premium
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $30/month
                </p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    200GB Storage
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    24/7 Support
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Unlimited Users
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Real-time Updates
                  </li>
                </ul>
                <Button className="mx-1" variant="outline">
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 animate-fade-in-up">
              What Our Readers Say
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 animate-fade-in-up">
              Here's how our blog has inspired, informed, and made a difference
              in their lives.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Testimonial 1 */}
            <div className="relative group w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="absolute top-0 -right-6 w-12 h-12 bg-purple-500 text-white flex items-center justify-center rounded-full shadow-lg transform group-hover:rotate-45 transition-transform duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 17l-5-5m0 0l5-5m-5 5h12"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic text-lg animate-slide-in">
                  "The content on this blog is a goldmine! It’s my go-to
                  resource for learning and growing."
                </p>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Sarah Thompson
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Freelance Blogger
                  </p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="relative group w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="absolute top-0 -right-6 w-12 h-12 bg-white text-blue-500 flex items-center justify-center rounded-full shadow-lg transform group-hover:rotate-45 transition-transform duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 17l-5-5m0 0l5-5m-5 5h12"
                    />
                  </svg>
                </div>
                <p className="italic text-lg animate-slide-in">
                  "I discovered so many practical tips here that helped me grow
                  my audience and monetize effectively."
                </p>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold">James Carter</h3>
                  <p>Digital Marketing Specialist</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="relative group w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="absolute top-0 -right-6 w-12 h-12 bg-pink-500 text-white flex items-center justify-center rounded-full shadow-lg transform group-hover:rotate-45 transition-transform duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 17l-5-5m0 0l5-5m-5 5h12"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic text-lg animate-slide-in">
                  "A treasure trove of ideas and advice. This blog is a
                  must-read for every aspiring writer."
                </p>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Emily Watson
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Author</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 animate-fade-in-up">
              Top Blogs
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 animate-fade-in-up">
              Check out our most popular blog posts and stay inspired.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Blog 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4 group">
              <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <img
                  src="https://i.pinimg.com/736x/0c/9f/af/0c9faf28721b9427e6ee9d058354b445.jpg"
                  alt="TypeScript Blog"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Mastering TypeScript in 2024
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A deep dive into TypeScript, its benefits, and how to
                    integrate it into your development workflow.
                  </p>
                  <a
                    href="/blog"
                    className="inline-block mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* Blog 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4 group">
              <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Web Development Blog"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Web Development Trends to Watch
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Explore the cutting-edge trends in web development that are
                    shaping the future of the industry.
                  </p>
                  <a
                    href="/blog"
                    className="inline-block mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* Blog 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4 group">
              <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
                  alt="UI/UX Blog"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Secrets to Stunning UI/UX Designs
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Uncover tips and tools for crafting user interfaces that
                    delight and engage.
                  </p>
                  <a
                    href="/blog"
                    className="inline-block mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
