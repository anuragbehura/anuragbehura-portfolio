import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="border bg-background h-screen flex flex-col items-center sm:max-w-[70%] w-full md:max-w-[40%] mx-auto overflow-auto">
            <Navbar />
            <main className="flex-1 w-full mt-5">{children}</main>
            <Footer />
        </div>
    );
}
