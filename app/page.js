"use client";

import { useEffect, useState } from "react";

const generateRandom = (min, max) => Math.random() * (max - min) + min;
const getRandomColor = () => `hsl(${generateRandom(0, 360)}, ${generateRandom(50, 100)}%, ${generateRandom(40, 70)}%)`;

export default function Home() {
  const [circles, setCircles] = useState([]);
  const numCircles = 30; // Adjust the number of circles as needed

  useEffect(() => {
    const createCircles = () => {
      const newCircles = Array.from({ length: numCircles }, () => ({
        x: generateRandom(0, window.innerWidth),
        y: generateRandom(0, window.innerHeight),
        radius: generateRandom(20, 150),
        color: getRandomColor(),
        opacity: generateRandom(0.1, 0.4),
      }));
      setCircles(newCircles);
    };

    createCircles(); // Initial creation

    const intervalId = setInterval(createCircles, 3000); // Update circles every 5 seconds

    const handleResize = () => createCircles();
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId); // Clear the interval on unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-600 text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Random Circles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {circles.map((circle, index) => (
          <div
            key={index}
            className="rounded-full blur-xl absolute transition-all duration-500 ease-in-out" // Added transition
            style={{
              width: circle.radius * 2,
              height: circle.radius * 2,
              backgroundColor: circle.color,
              opacity: circle.opacity,
              left: circle.x - circle.radius,
              top: circle.y - circle.radius,
              transform: 'translateZ(0)',
            }}
          ></div>
        ))}
      </div>

     
      <div className="relative z-10 max-w-3xl text-center bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl p-10 border border-white/10">
        <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400">
          Your AI-Powered Solution
        </h1>
        <p className="text-xl mb-8 text-white/90">
          Discover the power of machine learning to solve real-world problems. Try our intelligent model now.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:brightness-110 text-white font-semibold py-3 px-6 rounded-full shadow-md transition transform hover:scale-105"
            onClick={() => (window.location.href = "/demo")}
          >
            🚀 Try the Demo
          </button>
          <button
            className="bg-white text-black font-semibold py-3 px-6 rounded-full border border-white hover:bg-opacity-90 transition transform hover:scale-105"
            onClick={() => (window.location.href = "/learnmore")}
          >
            📘 Learn More
          </button>
        </div>
      </div>
    </main>
  );
}