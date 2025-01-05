"use client";

import { useState, useEffect } from "react";
import { TextAnimate } from "@/components/ui/text-animate";

interface DynamicTextAnimateProps {
    words: string[];
    interval?: number;
    className?: string;
}

export function DynamicTextAnimate({
    words,
    interval = 3000,
    className = "",
}: DynamicTextAnimateProps) {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [nextWord, setNextWord] = useState(words[0]);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        let currentIndex = 0;

        const changeWord = setInterval(() => {
            currentIndex = (currentIndex + 1) % words.length;
            setNextWord(words[currentIndex]);
            setIsTransitioning(true);

            // Set a small delay before updating the current word
            setTimeout(() => {
                setCurrentWord(words[currentIndex]);
                setIsTransitioning(false);
            }, 100);
        }, interval);

        return () => clearInterval(changeWord);
    }, [words, interval]);

    return (
        <div className={`relative ${className}`}>
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                <TextAnimate animation="blurInUp" by="character">
                    {currentWord}
                </TextAnimate>
            </div>
            {isTransitioning && (
                <div className="absolute top-0 left-0 transition-opacity duration-300 opacity-100">
                    <TextAnimate animation="blurInUp" by="character">
                        {nextWord}
                    </TextAnimate>
                </div>
            )}
        </div>
    );
}