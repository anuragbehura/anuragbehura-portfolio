import type { Metadata, Viewport } from "next";
import { fontSans } from "@/config/fonts";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AOSInit } from "./aos";


export const metadata: Metadata = {
  title: {
    default: "Anurag Behura",
    template: `%s - ${"Anurag Behura"}`,
  },
  description: "Hi, I’m Anurag Behura, a 2024 Computer Science graduate passionate about creating impactful web applications and AI-driven tools. With expertise in Next.js, Node.js, and MongoDB, I focus on building scalable, future-ready solutions. Explore my work and let’s collaborate to turn bold ideas into exceptional digital experiences! 🚀",
  icons: {
    icon: "/me.png"
  }
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)", color: "white"
    },
    {
      media: "(prefers-color-scheme: dark)", color: "blue"
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">

      <AOSInit />


      <body
        className={`${fontSans.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <ThemeProvider>
          <Navbar />
          <section className="flex flex-col items-center justify-center gap-4 ">
            <div className="inline-block justify-center md:ml-10 sm:ml-10">
              {children}
            </div>
          {/* <Footer /> */}
          </section>
        </ThemeProvider>

        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" defer></script>
      </body>
    </html>
  );
}
