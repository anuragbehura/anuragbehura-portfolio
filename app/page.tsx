"use client"

import Image from "next/image";
import BlurFade from "@/components/ui/blur-fade";
import { DynamicTextAnimate } from "@/components/DynamicTextAnimate";
import { ArrowUpRight } from 'lucide-react';
import Link from "next/link";
import { useEffect } from "react";
// import { fetchMediumRSS } from "@/api/fetchMedium";

export default function Home() {

  // useEffect(() => {
  //   const fetchRSSFeed = async () => {
  //     try {
  //       const response = await fetch('/pages/api/fetchMedium');
  //       const rssFeed = await response.text();
  //       console.log(rssFeed); // Process the RSS feed here
  //     } catch (error) {
  //       console.error('Error fetching Medium RSS feed:', error);
  //     }
  //   };

  //   fetchRSSFeed();
  // }, []);

  const words = ["Developer", "Designer", "Full-stack", "Mobile/Web", "AI/ML", "UI/UX", "Security"];

  return (
    <section data-aos="fade-in" className="w-full min-h-screen relative antialiased max-w-xl p-4 mx-4 sm:mx-auto">
      <div className="space-y-12">
        {/* Profile Section */}
        <div>
          <BlurFade delay={0.25} inView>
            <div className="relative mb-4 mt-4">
              <Image
                src="/1.svg"
                alt="Profile"
                width={150}
                height={150}
                priority
                draggable="false"
                className="select-none rounded-2xl shadow-custom"
              />
            </div>
            <h1
              className="absolute top-42 -left-2 -mb-6 text-4xl bg-opacity-70 dark:bg-opacity-70 p-2 rounded"
              data-aos="fade-in"
            >
              Hey, I&apos;m <span className="text-green-400">&lt;</span>Anurag <span className="text-green-400">/&gt;</span>
            </h1>
          </BlurFade>
        </div>

        {/* Tags Section */}
        <div>
          <BlurFade delay={0.5} inView>
            <div className="mt-20">
              <div className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">
                📍INDIA
              </div>
              <span className="inline-flex items-center rounded-md bg-gray-50 px-1 py-1 mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">
                <DynamicTextAnimate words={words} interval={3000} />
              </span>
            </div>
          </BlurFade>
        </div>

        {/* About Section */}
        <div className="mt-12">
          <h2 data-aos="fade-in" className="font-medium text-2xl mb-6">About me</h2>
          <div data-aos="fade-in" data-aos-delay="900" className="space-y-4">
            <p data-aos="fade-in">
              I&apos;m a 2024 Computer Science and Engineering grad passionate about building innovative solutions and creating seamless digital experiences and AI-driven tools.{" "}
              With expertise in Next.js, Node.js, MongoDB, and TypeScript, I specialize in developing scalable web applications, SaaS platforms, and interactive tools.
            </p>
            <p>
              My projects reflect my dedication to leveraging cutting-edge technology to solve real-world problems, including a form builder platform.{" "}
              As a tech enthusiast, I'm driven to learn, innovate, and make an impact. Let's collaborate to turn ideas into reality!
            </p>
            <ul className="pt-4 justify-end font-sm flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
              <li>
                <Link
                  className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                  rel="noopener noreferrer"
                  href="/about"
                >
                  <p className="ml-2 h-7">Read more</p>
                  <ArrowUpRight />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Featured Work Section */}
        <h2 className="font-medium text-2xl text-foreground">
          Featured work
        </h2>
        <section>
          <div className="mb-5">
            <div data-aos="fade-up" className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h1 className="text-2xl mb-2 inline-block font-medium text-black dark:text-white">
                      NextForm🤩
                    </h1>
                    <p className="mt-1 mb-4 text-xs text-gray-600 leading-tight dark:text-neutral-400">
                      NextForm is an intuitive form builder platform that allows users to easily create, customize, and share forms with a drag-and-drop interface.
                    </p>
                    <div className="mt-4">
                      <Link href={"/"}>
                        <button
                          type="button"
                          className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block rounded-md px-2 py-1 mt-3 mr-2 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"
                        >
                          Read more
                        </button>
                      </Link>
                      <Link href={"https://next-form-ab.vercel.app/"} rel="noopener noreferrer" target="_blank">
                        <button
                          type="button"
                          className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 text-xs font-medium ring-1 ring-inset text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-800 ring-gray-500/10"
                        >
                          <div className="flex items-center justify-center">
                            View Site
                            <ArrowUpRight size={16} />
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="group block h-full">
                    <div className="h-full overflow-hidden bg-gray-100 rounded-b-lg md:rounded-b-none md:rounded-r-lg md:rounded-l-none dark:bg-neutral-800">
                      <Link href={"https://next-form-ab.vercel.app/"} rel="noopener noreferrer" target="_blank">
                        <Image
                          className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full " src="/projects/1.png" width="1000" height="1000" alt="Description" 
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <div data-aos="fade-up" className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h1 className="text-2xl mb-2 inline-block font-medium text-black dark:text-white">
                      NextForm🤩
                    </h1>
                    <p className="mt-1 mb-4 text-xs text-gray-600 leading-tight dark:text-neutral-400">
                      NextForm is an intuitive form builder platform that allows users to easily create, customize, and share forms with a drag-and-drop interface.
                    </p>
                    <div className="mt-4">
                      <Link href={"/"}>
                        <button
                          type="button"
                          className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block rounded-md px-2 py-1 mt-3 mr-2 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"
                        >
                          Read more
                        </button>
                      </Link>
                      <Link href={"https://next-form-ab.vercel.app/"} rel="noopener noreferrer" target="_blank">
                        <button
                          type="button"
                          className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 text-xs font-medium ring-1 ring-inset text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-800 ring-gray-500/10"
                        >
                          <div className="flex items-center justify-center">
                            View Site
                            <ArrowUpRight size={16} />
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="group block h-full">
                    <div className="h-full overflow-hidden bg-gray-100 rounded-b-lg md:rounded-b-none md:rounded-r-lg md:rounded-l-none dark:bg-neutral-800">
                      <Link href={"https://next-form-ab.vercel.app/"} rel="noopener noreferrer" target="_blank">
                        <Image
                          className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full " src="/projects/1.png" width="1000" height="1000" alt="Description"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul className="mb-10 justify-end font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                href="/projects"
              >
                <ArrowUpRight />
                <p className="ml-2 h-7">See more projects</p>
              </a>
            </li>
          </ul>

          <div data-aos="fade-in" className="mb-5">
            <h2 className="font-medium text-2xl">
              Publications
            </h2>
          </div>

        </section>
      </div>
    </section>
  );
}