// src/components/CursorGlow.tsx
'use client'; // This component must be client-side

import { useState, useEffect } from 'react';

// Defines the shape and position of the glow
const CursorGlow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Update the position based on the mouse coordinates
            setPosition({ x: e.clientX, y: e.clientY });
        };

        // Add event listener to the whole document
        document.addEventListener('mousemove', handleMouseMove);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Empty array means this runs once on mount

    return (
        <div
            className="fixed inset-0 pointer-events-none z-[9999]" // z-index ensures it's above everything
        >
            <div
                style={{
                    // Use CSS transforms for smooth movement, placing the center at the cursor
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    // Custom glow styles: large, blurry, semi-transparent circle
                    width: '500px', // Adjust size of the glow
                    height: '500px',
                    backgroundColor: 'rgba(25, 179, 179, 0.1)', // Your teal/blue color
                    borderRadius: '50%',
                    filter: 'blur(100px)', // Make it very blurry
                    opacity: '0.8',
                    position: 'fixed',
                    top: '-250px', // Offset to center the 500px div (top: -size/2)
                    left: '-250px', // Offset to center the 500px div (left: -size/2)
                    transition: 'transform 0.1s ease-out', // Smoother movement
                }}
            />
        </div>
    );
};

export default CursorGlow;