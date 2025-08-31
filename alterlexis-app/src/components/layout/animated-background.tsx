'use client';

import { useEffect, useState, useMemo } from 'react';

// Word list for the floating words animation
const words = [
    'vocabulary', '你好', 'знание', 'Wortschatz', 'lexique', '知恵', 'vocabulario', 
    'معرفة', 'sapere', 'connaissance', 'erudition', 'learning', 'estudio', 
    'ուսում', 'yзу', 'știință', 'vědění', 'kennis', 'αρχαιογνωσία'
];

interface FloatingWord {
  word: string;
  style: React.CSSProperties;
}

interface Star {
  style: React.CSSProperties;
  animationDuration: string;
}

const AnimatedBackground = () => {
    const [floatingWords, setFloatingWords] = useState<FloatingWord[]>([]);
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        // --- Non-overlapping grid logic for words ---
        const grid_size = 15;
        const positions = new Set<string>();
        
        const generatedWords = words.map((word, i) => {
            let row, col;
            do {
                row = Math.floor(Math.random() * grid_size);
                col = Math.floor(Math.random() * grid_size);
            } while (positions.has(`${row}-${col}`));
            positions.add(`${row}-${col}`);

            const x = (col / grid_size) * 100;
            const y = (row / grid_size) * 100;

            return {
                word,
                style: {
                    left: `${x}%`,
                    top: `${y}%`,
                    animationDelay: `${i * 2}s`,
                    animationDuration: `${25 + Math.random() * 30}s`,
                },
            };
        });
        setFloatingWords(generatedWords);

        // --- Generate individual stars to prevent rendering artifacts ---
        const totalStars = 150;
        const generatedStars: Star[] = Array.from({ length: totalStars }).map(() => {
            const size = `${1 + Math.random() * 2}px`;
            return {
                style: {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 2000}px`, // Position stars along the entire animation height
                    width: size,
                    height: size,
                },
                animationDuration: `${100 + Math.random() * 100}s`, // Varied speeds for parallax
            };
        });
        setStars(generatedStars);

    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden" aria-hidden="true">
            {/* Star Layers - now individual divs */}
            <div className="absolute inset-0">
                {stars.map((star, i) => (
                    <div 
                        key={i}
                        className="absolute bg-white rounded-full animate-stars-move"
                        style={{ ...star.style, animationDuration: star.animationDuration }}
                    />
                ))}
            </div>

            {/* Floating Words Layer */}
            <div className="relative w-full h-full">
                {floatingWords.map(({ word, style }, i) => (
                    <span
                        key={i}
                        className="absolute text-5xl text-muted/10 animate-words-float" // Opacity increased to 10%
                        style={style}
                    >
                        {word}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default AnimatedBackground;
