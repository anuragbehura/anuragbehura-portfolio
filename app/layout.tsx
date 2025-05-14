import type { Metadata, Viewport } from "next";
import { fontSans } from "@/config/fonts";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import { AOSInit } from "./aos";
import FloatingMusicPlayerWithStyles from "@/components/FloatingMusicPlayer";

export const metadata: Metadata = {
  title: {
    default: "Anurag Behura",
    template: `%s - ${"Anurag Behura"}`,
  },
  description: "Hi, I'm Anurag Behura, a 2024 Computer Science graduate passionate about creating impactful web applications and AI-driven tools. With expertise in Next.js, Node.js, and MongoDB, I focus on building scalable, future-ready solutions. Explore my work and let's collaborate to turn bold ideas into exceptional digital experiences! 🚀",
  icons: {
    icon: "/me.png"
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: "Anurag Behura",
    startupImage: ['/me.png']
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover', // This is for ios notch handling
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`
          ${fontSans.variable} 
          antialiased 
          min-h-screen 
          bg-background 
          font-sans 
          overflow-x-hidden
          w-full
        `}
      >
        <ThemeProvider>
          <Navbar />
          <main className="
            flex 
            flex-col 
            items-center 
            justify-center 
            gap-4 
            px-4 
            sm:px-6 
            md:px-8 
            lg:px-12
            w-full 
            max-w-7xl 
            mx-auto
            pt-safe-b
            pb-safe-b
          ">
            <div className="
              w-full
              sm:w-11/12
              md:w-10/12
              lg:w-9/12
              mx-auto
              space-y-6
            ">
              {children}
              <div className="fixed bottom-4 right-4 z-50">
                <FloatingMusicPlayerWithStyles />
              </div>
            </div>
          </main>
        </ThemeProvider>
        <AOSInit />
      </body>
    </html>
  );
}