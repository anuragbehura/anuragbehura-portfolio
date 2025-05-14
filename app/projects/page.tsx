"use client"

import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from 'lucide-react';
import BlurFade from "@/components/ui/blur-fade";

function ProjectsPage() {
  // Sample project data - you can replace with your actual projects or fetch from an API
  const projects = [
    {
      id: 1,
      title: "NextForm🤩",
      description: "NextForm is an intuitive form builder platform that allows users to easily create, customize, and share forms with a drag-and-drop interface.",
      image: "/projects/1.png",
      link: "https://next-form-ab.vercel.app/"
    },
    {
      id: 2,
      title: "Project Two",
      description: "A comprehensive project description that highlights the key features and technologies used in this application.",
      image: "/projects/1.png", // Replace with actual image
      link: "https://project-link.com"
    },
    {
      id: 3,
      title: "Project Three",
      description: "An innovative solution that addresses real-world problems using cutting-edge technologies and user-centered design principles.",
      image: "/projects/1.png", // Replace with actual image
      link: "https://project-link.com"
    },
    {
      id: 4,
      title: "Project Four",
      description: "A scalable web application built with modern frameworks to deliver a seamless and responsive user experience across devices.",
      image: "/projects/1.png", // Replace with actual image
      link: "https://project-link.com"
    }
  ];

  return (
    <section className="w-full min-h-screen relative antialiased max-w-xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
      <BlurFade delay={0.25} inView>
        <div data-aos="fade-in" className="mb-8">
          <h1 className="font-medium text-3xl sm:text-4xl mb-4">Projects</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            A collection of my recent work and side projects.
          </p>
        </div>
      </BlurFade>

      <div className="space-y-8">
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
                        <Link href={`/projects/${project.id}`}>
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
      </div>
    </section>
  );
}

export default ProjectsPage;