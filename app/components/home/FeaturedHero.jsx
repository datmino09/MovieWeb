import React from 'react';
import { Play, Bookmark, Star } from 'lucide-react';

export default function FeaturedHero({ featuredMovie }) {
  return (
    <section className="relative h-[600px] mb-12">
      <div className="absolute inset-0">
        <img
          src={featuredMovie.backdrop}
          alt={featuredMovie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-red-600 px-3 py-1 rounded text-sm font-semibold">PHIM NỔI BẬT</span>
            <span className="text-gray-300">{featuredMovie.year}</span>
            <span className="text-gray-300">• {featuredMovie.duration}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">{featuredMovie.title}</h1>

          <div className="flex items-center gap-4 mb-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-yellow-400" />
              <span className="text-xl md:text-2xl font-bold">{featuredMovie.rating}</span>
              <span className="text-gray-400">/10</span>
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300">{featuredMovie.genre}</span>
          </div>

          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed line-clamp-3 md:line-clamp-none">{featuredMovie.description}</p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 px-8 py-3 md:py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all hover:scale-105">
              <Play className="w-6 h-6 fill-white" />
              Xem ngay
            </button>
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-3 md:py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all hover:scale-105">
              <Bookmark className="w-6 h-6" />
              Danh sách
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
