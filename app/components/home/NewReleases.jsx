import React from 'react'
import { Clock, ChevronRight } from 'lucide-react';
import MovieCard from '../part/MovieCard';
import { useMoviesRelease } from '@/lib/apiMovies';
export default function NewReleases() {
  const { data, isLoading, isError, error } = useMoviesRelease();
  const newReleases = data?.data?.items || [];
  if (isLoading) {
    return (
      <section className="container mx-auto px-4 mb-12">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <div className="px-6 py-2 bg-gray-800 rounded-full animate-pulse w-24 h-8" />
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="container mx-auto px-4 mb-12">
        <div className="text-red-400">Lỗi tải thể loại: {error?.message}</div>
      </section>
    );
  }
  return (
    <section className="container mx-auto px-4 mb-16">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Clock className="w-7 h-7 text-red-600" />
          <h2 className="text-3xl font-bold">Sắp chiếu</h2>
        </div>
        {/* <button className="flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold">
          Xem tất cả
          <ChevronRight className="w-5 h-5" />
        </button> */}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {newReleases.map(movie => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </section>
  )
}
