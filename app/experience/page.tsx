"use client"

import React from 'react'
import Link from "next/link";
import { ArrowUpRight, FileText } from 'lucide-react';
import BlurFade from "@/components/ui/blur-fade";

function ExperienceEducationPage() {
  return (
    <section className="w-full min-h-screen relative antialiased max-w-xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
      <BlurFade delay={0.25} inView>
        <div data-aos="fade-in" className="mb-8">
          <h1 className="font-medium text-3xl sm:text-4xl mb-4">Experience & Education</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            My professional journey and academic background.
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={0.5} inView>
        <div data-aos="fade-in" className="mt-8 mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-medium text-2xl">
              Experience & Education
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
              <div className="pl-4 border-l border-neutral-200 dark:border-neutral-800">
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">BTech in Computer Science and Engineering</h4>
                    <span className="text-neutral-500 text-sm">2020 - 2024</span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">Government College of Engineering, Keonjhar</p>
                  <p className="text-sm text-neutral-500 mt-1">CGPA: 7.37/10.0</p>
                </div>

                {/* You can add more education entries here */}
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">Higher Secondary Education</h4>
                    <span className="text-neutral-500 text-sm">2018 - 2020</span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">Kalinga Bharati Residential College, Cuttack</p>
                  <p className="text-sm text-neutral-500 mt-1">Percentage: 64%</p>
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

                {/* You can add more experience entries here */}
                {/* <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">Open Source Contributor</h4>
                    <span className="text-neutral-500 text-sm">2023 - Present</span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">Various Projects</p>
                  <ul className="list-disc list-inside text-sm text-neutral-500 mt-2">
                    <li className="ml-2">Contributed to open source JavaScript libraries</li>
                    <li className="ml-2">Fixed bugs and implemented new features</li>
                    <li className="ml-2">Collaborated with developers globally</li>
                  </ul>
                </div> */}

              </div>
            </div>

            {/* Skills Section - Added as an extra section for the dedicated page */}
            <div>
              <h3 className="text-lg font-medium mb-3 mt-6">Skills</h3>
              <div className="pl-4 border-l border-neutral-200 dark:border-neutral-800">
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Programming Languages & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'TypeScript', 'React', 'Angular', 'Next.js', 'Node.js', 'MongoDB', 'PostgresSQL', 'HTML/CSS', 'Python'].map((skill) => (
                      <span key={skill} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Tools & Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'AWS', 'Firebase', 'Tailwind CSS', 'Redux', 'React Query'].map((tool) => (
                      <span key={tool} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Certifications Section - Added as an extra section for the dedicated page */}
      <BlurFade delay={0.75} inView>
        <div data-aos="fade-in" className="mt-12 mb-10">
          <h2 className="font-medium text-2xl mb-6">Certifications</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-[1.01]">
              <div className="flex justify-between mb-1">
                <h4 className="font-medium">Full Stack Web Development</h4>
                <span className="text-neutral-500 text-sm">2024</span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mb-2">TECHISMUST</p>
              <Link href={'/certificates/TECHISMUST.pdf'} rel="noopener noreferrer" target="_blank">
                <button
                  type="button"
                  className="transition-all duration-300 hover:scale-105 hover:shadow-md dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium ring-1 ring-inset text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-800 ring-gray-500/10"
                >
                  <div className="flex items-center justify-center">
                    View 
                    <ArrowUpRight size={16} className="ml-1 text-green-500" />
                  </div>
                </button>
              </Link>
            </div>

            {/* <div className="p-4 rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-[1.01]">
              <div className="flex justify-between mb-1">
                <h4 className="font-medium">Machine Learning Specialization</h4>
                <span className="text-neutral-500 text-sm">2022</span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">Provider Name</p>
            </div> */}

          </div>
        </div>
      </BlurFade>
    </section>
  );
}

export default ExperienceEducationPage;