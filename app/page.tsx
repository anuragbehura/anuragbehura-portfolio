import Image from "next/image";
import BlurFade from "@/components/ui/blur-fade";
import { DynamicTextAnimate } from "@/components/DynamicTextAnimate";
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  const words = ["Developer","Designer","Full-stack","Mobile/Web","AI/ML","UI/UX","Security"];
  return (
    <section data-aos="fade-in" className="w-full h-full relative antialiased max-w-xl p-4 mx-4 sm:mx-auto">
      < BlurFade delay={0.25} inView >
        <div className="relative mb-4 mt-4"> {/* Adjust this value as needed */}
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
        >       Hey, I&apos;m Anurag 👋🏻
        </h1>
      </BlurFade>

      <BlurFade delay={0.5} inView>
        <div className="mt-20">
          <div className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">
            📍INDIA
          </div>
          {/* <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">
            CTO of ReplaceIT
          </span> */}
          <span className="inline-flex items-center rounded-md bg-gray-50 px-1 py-1 mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">
            <DynamicTextAnimate words={words} interval={3000} />
          </span>
        </div>
      </BlurFade>

      <h2 data-aos="fade-in" data-aos-delay="900" className="font-medium mt-12 text-2xl">
        About me
      </h2>
      <div data-aos="fade-in" data-aos-delay="900">
        <p data-aos="fade-in" >
          I&apos;m a 2024 Computer Science and Engineering grad passionate about building innovative solutions and creating seamless digital experiences and AI-driven tools. {" "}
          With
          {""} expertise in Next.js, Node.js, MongoDB, and TypeScript, I specialize in developing scalable web applications, SaaS platforms, and interactive tools.{" "}     
          {" "} </p>

        <p data-aos="fade-in" className="mt-4" >My projects reflect my dedication to leveraging cutting-edge technology to solve real-world problems, including a form builder platform. {" "}
          As a tech enthusiast, I’m driven to learn, innovate, and make an impact. Let’s collaborate to turn ideas into reality!
        </p>
        {/* </div> */}

        <ul className=" mb-4 mt-6 justify-end font-sm flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              href="/about"
            >
              <p className="ml-2 h-7">Read more</p>
              <ArrowUpRight />
            </a>
          </li>
        </ul>
      </div>

      <h2 data-aos="fade-in" className="font-medium bg-black text-2xl" >
       Featured work
      </h2>
    </section>
  );
}
