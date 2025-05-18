"use client"

import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText, Github, Linkedin, Twitter } from 'lucide-react';
import BlurFade from "@/components/ui/blur-fade";

function AboutPage() {
  return (
    <section className="w-full min-h-screen relative antialiased max-w-xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
      <BlurFade delay={0.25} inView>
        <div data-aos="fade-in" className="mb-8">
          <h1 className="font-medium text-3xl sm:text-4xl mb-4">About Me</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Get to know more about me and what drives my passion for technology.
          </p>
        </div>
      </BlurFade>

      {/* Profile Section */}
      <BlurFade delay={0.5} inView>
        <div className="mt-8 mb-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <Image
              src="/me2.webp"
              alt="Profile"
              width={160}
              height={160}
              priority
              draggable="false"
              className="select-none rounded-2xl shadow-custom"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-medium">Anurag Behura</h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Full-stack Developer | CS Graduate | Tech Enthusiast
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/anuragbehura"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com/in/anuragbehura"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com/_anuragbehura_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                <Twitter size={20} />
              </Link>
            </div>
            <div className="pt-2">
              <Link
                href={"/AnuragBehuraNew.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 px-3 py-2 rounded-md text-sm transition-all duration-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              >
                <FileText size={16} />
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* About Me Section */}
      <BlurFade delay={0.75} inView>
        <div data-aos="fade-in" className="mb-12">
          <h2 className="font-medium text-2xl mb-6">My Journey</h2>
          <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
            <p>
              I'm a 2024 Computer Science and Engineering graduate from Government College of Engineering, Keonjhar.
              My passion for technology began early, and I've been on a continuous journey of learning and growth
              in the ever-evolving field of software development.
            </p>
            <p>
              Throughout my academic journey, I've focused on building a strong foundation in both theoretical
              computer science concepts and practical development skills. I specialize in full-stack development
              with expertise in Next.js, Node.js, MongoDB, and TypeScript, allowing me to create seamless digital
              experiences and innovative solutions.
            </p>
            <p>
              Beyond my academic pursuits, I've actively engaged in personal projects
              to apply my knowledge to real-world challenges. My most notable work includes NextForm, an intuitive
              form builder platform that allows users to easily create, customize, and share forms with a drag-and-drop
              interface.
            </p>
            <p>
              I'm particularly interested in emerging technologies like AI/ML and their applications in creating
              user-centric products. I believe in the power of technology to solve real-world problems and improve
              people's lives.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Skills Section */}
      <BlurFade delay={1.0} inView>
        <div data-aos="fade-in" className="mb-12">
          <h2 className="font-medium text-2xl mb-6">Skills & Expertise</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Redux'].map((skill) => (
                  <span key={skill} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'MongoDB', 'PostgresSQL', 'REST API'].map((skill) => (
                  <span key={skill} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'AWS', 'VS Code', 'Vercel', 'Netlify'].map((skill) => (
                  <span key={skill} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Interests Section */}
      <BlurFade delay={1.25} inView>
        <div data-aos="fade-in" className="mb-12">
          <h2 className="font-medium text-2xl mb-6">Interests & Hobbies</h2>
          <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
            <p>
              Beyond coding and development, I'm passionate about:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Technical Writing - I enjoy sharing my knowledge through blogs on Medium</li>
              {/* <li>Open Source - Contributing to community projects and learning from others</li> */}
              <li>UI/UX Design - Designing beautiful and intuitive user interfaces</li>
              <li>AI/ML Research - Exploring new applications and possibilities</li>
              <li>Reading - Technical books and sci-fi literature</li>
            </ul>
          </div>
        </div>
      </BlurFade>

      {/* Get in Touch Section */}
      <BlurFade delay={1.5} inView>
        <div data-aos="fade-in" className="mb-12">
          <h2 className="font-medium text-2xl mb-6">Get In Touch</h2>
          <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <p className="font-medium mb-2">Quick contact details:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="font-medium">Email:</span>
                  <a href="mailto:behura960@gmail.com" className="text-green-600 dark:text-green-400 hover:underline">
                    behura960@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">Location:</span>
                  <span>India</span>
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-all duration-300"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight size={16} className="ml-1" />
                </Link>
                <p className="text-sm mt-2 text-neutral-500 dark:text-neutral-400">
                  For project inquiries, collaborations, or to send a detailed message
                </p>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Projects Link */}
      <BlurFade delay={1.75} inView>
        <div data-aos="fade-in" className="mt-12 mb-8">
          <div className="p-4 rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-[1.01]">
            <h3 className="font-medium text-lg mb-2">Check Out My Work</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Explore my projects and see what I've been building.
            </p>
            <Link
              href="/projects"
              className="flex items-center text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              <span>View all projects</span>
              <ArrowUpRight className="ml-1 text-green-500" size={16} />
            </Link>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}

export default AboutPage;