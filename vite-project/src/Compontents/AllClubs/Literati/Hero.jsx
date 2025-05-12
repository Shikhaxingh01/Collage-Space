import React from "react";
import { BookOpen } from "lucide-react";
export const Hero = () => {
  return (
    <div className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.1')`,
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <BookOpen className="w-12 h-12 text-yellow-300" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 ">
          Literati
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 italic ">
          Where words weave magic, and stories come to life.
        </p>
      </div>
    </div>
  );
};
