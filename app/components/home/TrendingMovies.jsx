import React from 'react'
import { TrendingUp, ChevronRight } from 'lucide-react';
import MovieCard from '../home/MovieCard';
export default function TrendingMovies() {
      const trendingMovies = [
    { id: 1, title: "Spider-Man", rating: 8.2, year: 2023, poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop" },
    { id: 2, title: "The Batman", rating: 7.9, year: 2023, poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450&fit=crop" },
    { id: 3, title: "Dune", rating: 8.5, year: 2023, poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop" },
    { id: 4, title: "Oppenheimer", rating: 9.0, year: 2023, poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop" },
    { id: 5, title: "John Wick 4", rating: 8.7, year: 2023, poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=450&fit=crop" },
    { id: 6, title: "Guardians 3", rating: 8.3, year: 2023, poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=450&fit=crop" }
  ];
  return (
     <section className="container mx-auto px-4 mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-red-600" />
              <h2 className="text-3xl font-bold">Phim Hot Tuần Này</h2>
            </div>
            <button className="flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold">
              Xem tất cả
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trendingMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
  )
}
