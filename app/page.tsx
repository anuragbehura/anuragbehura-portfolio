"use client"

import Image from "next/image";
import BlurFade from "@/components/ui/blur-fade";
import { DynamicTextAnimate } from "@/components/DynamicTextAnimate";
import { ArrowUpRight } from 'lucide-react';
import Link from "next/link";
import { useMediumPosts } from "@/hooks/useMediumPosts";
// import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function Home() {
  const { posts, loading, error } = useMediumPosts('anuragbehura');
  const words = ["Developer", "Full-stack", "Designer", "Mobile/Web", "AI/ML", "UI/UX", "Security"];

  const projects = [
    {
      id: 1,
      title: "NextForm🤩",
      description: "NextForm is an intuitive form builder platform that allows users to easily create, customize, and share forms with a drag-and-drop interface.",
      image: "/projects/1.png",
      readMore: "https://github.com/anuragbehura/next-form",
      link: "https://next-form-ab.vercel.app/"
    },
    {
      id: 2,
      title: "Project Two",
      description: "Up coming Project",
      image: "/projects/comingSoon.jpg", // Replace with actual image
      readMore: "",
      link: "/projects"
    },
    // {
    //   id: 3,
    //   title: "Project Three",
    //   description: "An innovative solution that addresses real-world problems using cutting-edge technologies and user-centered design principles.",
    //   image: "/projects/1.png", // Replace with actual image
    //   link: "https://project-link.com"
    // },
    // {
    //   id: 4,
    //   title: "Project Four",
    //   description: "A scalable web application built with modern frameworks to deliver a seamless and responsive user experience across devices.",
    //   image: "/projects/1.png", // Replace with actual image
    //   link: "https://project-link.com"
    // }
  ];

  return (
    <section
      data-aos="fade-in"
      className="w-full min-h-screen relative antialiased max-w-xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12"
    >
      <div className="space-y-8 sm:space-y-12">
        {/* Profile Section */}
        <div className="relative">
          <BlurFade delay={0.25} inView>
            <div className="relative mb-4 mt-4">
              <Image
                src="/me2.webp"
                alt="Profile"
                width={120}
                height={120}
                priority
                draggable="false"
                className="select-none rounded-2xl shadow-custom sm:w-[150px] sm:h-[150px]"
              />
            </div>
            <h1
              className="absolute top-42 -left-2 -mb-6 text-3xl sm:text-4xl bg-opacity-70 dark:bg-opacity-70 p-2 rounded"
              data-aos="fade-in"
            >
              Hey, I&apos;m <span className="text-green-400">&lt;</span>Anurag <span className="text-green-400">/&gt;</span>
            </h1>
          </BlurFade>
        </div>

        {/* Tags Section */}
        <div>
          <BlurFade delay={0.5} inView>
            <div className="mt-16 sm:mt-20 flex flex-wrap gap-2">
              <div className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">
                📍INDIA
              </div>
              <span className="inline-flex items-center rounded-md bg-gray-50 px-1 py-1 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">
                <DynamicTextAnimate words={words} interval={3000} />
              </span>
            </div>
          </BlurFade>
        </div>

        {/* About Section */}
        <div className="mt-8 sm:mt-12">
          <h2 data-aos="fade-in" className="font-medium text-xl sm:text-2xl mb-4 sm:mb-6">About me</h2>
          <div data-aos="fade-in" data-aos-delay="900" className="space-y-4">
            <p data-aos="fade-in" className="text-sm sm:text-base">
              I&apos;m a 2024 Computer Science and Engineering grad passionate about building innovative solutions and creating seamless digital experiences and AI-driven tools.{" "}
              With expertise in Next.js, Node.js, MongoDB, and TypeScript, I specialize in developing scalable web applications, SaaS platforms, and interactive tools.
            </p>
            <p className="text-sm sm:text-base">
              My projects reflect my dedication to leveraging cutting-edge technology to solve real-world problems, including a form builder platform.{" "}
              As a tech enthusiast, I&apos;m driven to learn, innovate, and make an impact. Let&apos;s collaborate to turn ideas into reality!
            </p>
            <ul className="pt-4 flex flex-col sm:flex-row gap-2 sm:gap-4 text-neutral-600 dark:text-neutral-300">
              <li>
                <Link
                  className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                  rel="noopener noreferrer"
                  href="/about"
                >
                  <p className="h-7">Read more</p>
                  <ArrowUpRight className="ml-1 text-green-500" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Featured Work Section */}
        <h2 className="font-medium text-xl sm:text-2xl text-foreground">
          Featured work
        </h2>
        <section className="space-y-6">
          {/* Project Cards */}
          {projects.map((project, index) => (
            <BlurFade key={project.id} delay={0.25 + (index * 0.15)} inView>
              <div data-aos="fade-up" data-aos-delay={index * 100} className="mb-5">
                <div className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <div className="flex flex-col md:flex-row">
                    <div className="p-4 sm:p-6 md:w-1/2 flex flex-col justify-between">
                      <div>
                        <h1 className="text-xl sm:text-2xl mb-2 inline-block font-medium text-black dark:text-white">
                          {project.title}
                        </h1>
                        <p className="mt-1 mb-4 text-xs text-gray-600 leading-tight dark:text-neutral-400">
                          {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Link href={project.readMore}>
                            <button
                              type="button"
                              className="transition-all duration-300 hover:scale-105 hover:shadow-md rounded-md px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"
                            >
                              Read more
                            </button>
                          </Link>
                          <Link href={project.link} rel="noopener noreferrer" target="_blank">
                            <button
                              type="button"
                              className="transition-all duration-300 hover:scale-105 hover:shadow-md dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium ring-1 ring-inset text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-800 ring-gray-500/10"
                            >
                              <div className="flex items-center justify-center">
                                View Site
                                <ArrowUpRight size={16} className="ml-1 text-green-500" />
                              </div>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="group block h-full">
                        <div className="h-48 sm:h-64 md:h-full overflow-hidden bg-gray-100 rounded-b-lg md:rounded-b-none md:rounded-r-lg md:rounded-l-none dark:bg-neutral-800">
                          <Link href={project.link} rel="noopener noreferrer" target="_blank">
                            <Image
                              className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full"
                              src={project.image}
                              width={1000}
                              height={1000}
                              alt={project.title}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}

          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-neutral-600 dark:text-neutral-300 mb-10">
            <li>
              <Link
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                href="/projects"
              >
                <p className="ml-2 h-7">See more projects</p>
                <ArrowUpRight className="text-green-500" />
              </Link>
            </li>
          </ul>

          {/* Blog Section */}
          <BlurFade delay={0.75} inView>
            <div data-aos="fade-in" className="mb-10 mt-10">
              <h2 className="font-medium text-xl sm:text-2xl">
                Blogs
              </h2>
            </div>

            {error ? (
              <div className="text-red-500 text-center p-4">{error}</div>
            ) : (
              <div className="space-y-6">
                {loading ? (
                  Array(2).fill(0).map((_, i) => (
                    <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="mb-5">
                      <div className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800">
                        <div className="flex flex-col md:flex-row animate-pulse">
                          <div className="p-4 sm:p-6 md:w-1/2">
                            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
                            <div className="h-4 bg-gray-200 rounded w-1/4 mb-4" />
                            <div className="space-y-2">
                              <div className="h-4 bg-gray-200 rounded" />
                              <div className="h-4 bg-gray-200 rounded w-5/6" />
                            </div>
                          </div>
                          <div className="md:w-1/2">
                            <div className="h-48 sm:h-64 md:h-full bg-gray-200 rounded-b-lg md:rounded-b-none md:rounded-r-lg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  posts.map((post, index) => (
                    <div key={post.link} data-aos="fade-up" data-aos-delay={index * 100} className="mb-5">
                      <div className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                        <div className="flex flex-col md:flex-row">
                          <div className="p-4 sm:p-6 md:w-1/2 flex flex-col justify-between">
                            <div>
                              <h3 className="text-xl sm:text-2xl mb-2 font-medium text-black dark:text-white line-clamp-2">
                                {post.title}
                              </h3>
                              <p className="text-sm text-gray-500 mb-4">
                                {new Date(post.pubDate).toLocaleDateString()}
                              </p>
                              <p className="text-sm text-gray-600 dark:text-neutral-400 line-clamp-3">
                                {post.excerpt}
                              </p>
                              <div className="mt-4">
                                <a
                                  href={post.link}
                                  className="inline-flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span className="text-sm font-medium">Read more</span>
                                  <ArrowUpRight size={16} className="ml-1 text-green-500" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="md:w-1/2">
                            <div className="group block h-full">
                              <div className="h-48 sm:h-64 md:h-full overflow-hidden bg-gray-100 rounded-b-lg md:rounded-b-none md:rounded-r-lg md:rounded-l-none dark:bg-neutral-800">
                                <Image
                                  src={post.imageUrl}
                                  alt={post.title}
                                  width={1000}
                                  height={1000}
                                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </BlurFade>

          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-neutral-600 dark:text-neutral-300 mb-10">
            <li>
              <Link
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                target="_blank"
                href="https://medium.com/@anuragbehura"
              >
                <p className="ml-2 h-7">See more blogs</p>
                <ArrowUpRight className="text-green-500" />
              </Link>
            </li>
          </ul>
        </section>

        {/* Education & Experiences */}
        <BlurFade delay={0.75} inView>
          <div data-aos="fade-in" className="mt-20 mb-10">
            <div className="mt-20 flex justify-between items-center">
              <h2 className="font-medium text-2xl">
                Eduction & Experience
              </h2>

              <div className="inline-flex items-center">
                <span className="bg-transparent px-2 py-1 text-sm transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md">
                  <Link
                    href={"/AnuragBehuraNew.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 inline-flex items-center gap-1"
                  >
                    <FileText size={16} />
                    Resume
                  </Link>
                </span>
              </div>
            </div>

            <div className="space-y-8">
              {/* Education section */}
              <div>
                <h3 className="text-lg font-medium mb-3 mt-10">Education</h3>
                <div className="pl-4 border-1 border-neutral-200 dark:border-neutral-800">
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">BTech in Computer Science and Engineering</h4>
                      <span className="text-neutral-500 text-sm">2020 - 2024</span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">Government College of Engineering, Keonjhar</p>
                    <p className="text-sm text-neutral-500 mt-1">CGPA: 7.37/10.0</p>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div>
                <h3 className="text-lg font-medium mb-3">Experience</h3>
                <div className="pl-4 border-l border-neutral-200 dark:border-neutral-800">
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">Full-stack Developer Intern</h4>
                      <span className="text-neutral-500 text-sm">May 2024 - July 2024</span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">TECHISMUST</p>
                    <ul className="list-disc list-inside text-sm text-neutral-500 mt-2">
                      <li className="ml-2">Worked on full-stack web development projects</li>
                      <li className="ml-2">Collaborated with team to deliver client solutions</li>
                      <li className="ml-2">Utilized modern web technologies and frameworks</li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </BlurFade>


      </div>
    </section>
  );
}