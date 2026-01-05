import React from 'react';
import { Play, Star } from 'lucide-react';

export default function MovieCard({ movie }) {
  return (
    <div className="group relative cursor-pointer">
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-gray-800">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Play className="w-8 h-8 text-red-600 bg-white rounded-full p-1" />
              <span className="text-sm font-semibold">Xem ngay</span>
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-semibold">{movie.rating}</span>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="font-semibold text-white truncate group-hover:text-red-500 transition-colors">
          {movie.title}
        </h3>
        <p className="text-sm text-gray-400">{movie.year}</p>
      </div>
    </div>
  );
}
