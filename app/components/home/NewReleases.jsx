import React from 'react'
import { Clock, ChevronRight } from 'lucide-react';
import MovieCard from '../home/MovieCard';
export default function NewReleases() {
      const newReleases = [
    { id: 7, title: "Fast X", rating: 7.5, year: 2024, poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop" },
    { id: 8, title: "Mission Impossible", rating: 8.8, year: 2024, poster: "https://images.unsplash.com/photo-1574267432644-f610fa3f564f?w=300&h=450&fit=crop" },
    { id: 9, title: "Barbie", rating: 7.8, year: 2024, poster: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=450&fit=crop" },
    { id: 10, title: "Wonka", rating: 7.6, year: 2024, poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=300&h=450&fit=crop" },
    { id: 11, title: "The Marvels", rating: 7.2, year: 2024, poster: "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?w=300&h=450&fit=crop" },
    { id: 12, title: "Aquaman 2", rating: 7.4, year: 2024, poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop" }
  ];
  return (
    <section className="container mx-auto px-4 mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Clock className="w-7 h-7 text-red-600" />
              <h2 className="text-3xl font-bold">Mới Cập Nhật</h2>
            </div>
            <button className="flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold">
              Xem tất cả
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {newReleases.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
</section>
  )
}
