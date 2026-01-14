"use client";
import React from 'react';
import { Play, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function MovieCard({ movie }) {
  const router = useRouter();
  return (
    <div className="group relative cursor-pointer" onClick={() => {
      router.push(`/play/${movie.slug}`);
    }}>
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-gray-800">
        <img
          src={process.env.NEXT_PUBLIC_IMAGE_BASE + movie.thumb_url}
          alt={movie.name}
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
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {movie.episode_current === "Trailer" ? (
            <span className="bg-blue-600 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-lg">
              Trailer
            </span>
          ) : (
            <>
              {movie.quality && (
                <span className="bg-red-600 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-lg">
                  {movie.quality}
                </span>
              )}
            </>
          )}

          {movie.lang && (
            <span className="bg-yellow-500 text-black px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-lg">
              {movie.lang}
            </span>
          )}
        </div>

        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1">
          <p className="text-xs text-gray-300">IMDB:</p>

          <span className="text-sm font-semibold text-white">{movie.imdb?.vote_average || 'N/A'}</span> <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
        </div>
      </div>
      <div className="mt-3">
        <h3 className="font-semibold text-white truncate group-hover:text-red-500 transition-colors">
          {movie.name}
        </h3>
        <p className="text-sm text-gray-400">{movie.year}</p>
      </div>
    </div>
  );
}
