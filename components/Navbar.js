"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(30);
    setTimeout(() => setProgress(20), 100);
    setTimeout(() => setProgress(100), 800);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setProgress(0), 900);
  }, []);

  return (
    <nav className="bg-gray-50 dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LoadingBar
          color="#933ce6"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14.414L6.586 12 5 13.586 11 19.586 19 11.586 17.414 10z" />
            </svg> */}
            <Image src={"/file.svg"} width={40} height={40} />
            <Link href="/" className="text-3xl font-extrabold r">
              SopanBlog
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {["Home", "About", "Contact", "Blog"].map((item) => (
              <Link
                href={`/${
                  item.toLowerCase() === "home" ? "" : item.toLowerCase()
                }`}
                className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
              >
                {item}
              </Link>
            ))}
            <Button className="mx-1 font-medium   ">Login</Button>
            <Button className="mx-1 font-medium  ">Sign Up</Button>
            <ModeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex gap-2 items-center">
            <ModeToggle />
            <Sheet>
              <SheetTrigger>
                <button className="text-gray-600 dark:text-gray-300 focus:outline-none">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-bold ">Sopan Blog</SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col gap-6 mt-4">
                      {["Home", "About", "Contact", "Blog"].map((item) => (
                        <Link
                          key={item}
                          href={`/${
                            item.toLowerCase() === "home"
                              ? ""
                              : item.toLowerCase()
                          }`} // Ensure Home routes to the root "/"
                          className="text-gray-600 px-3 py-2 transition-all duration-300"
                        >
                          {item}
                        </Link>
                      ))}
                      <Button className="mx-1 text-sm font-medium   ">
                        Login
                      </Button>
                      <Button className="mx-1 text-sm font-medium  ">
                        Sign Up
                      </Button>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
