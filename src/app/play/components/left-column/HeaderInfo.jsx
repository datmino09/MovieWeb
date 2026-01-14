import React from 'react'
import {
  Star, Clock, Calendar,
  Share2, Bookmark, ThumbsUp, Eye,
} from 'lucide-react';
export default function HeaderInfo({ movie }) {
  return (
    <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">{movie.name}</h1>
        <p className="text-gray-400 text-lg mb-4">{movie.origin_name}</p>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2 bg-yellow-500/20 px-3 py-1 rounded">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="font-bold text-lg">{movie.tmdb.vote_average}</span>
            <span className="text-gray-400 text-sm">/10</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <Calendar className="w-5 h-5" />
            <span>{movie.year}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-5 h-5" />
            <span>{movie.time}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <Eye className="w-5 h-5" />
            <span>{movie.view.toLocaleString()} lượt xem</span>
          </div>

          <span className="px-3 py-1 bg-red-600 rounded text-sm font-semibold">
            {movie.quality}
          </span>

          <span className="px-3 py-1 bg-blue-600 rounded text-sm font-semibold">
            {movie.lang}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {movie.category.map((cat) => (
            <span key={cat.id} className="px-4 py-1 bg-gray-800 rounded-full text-sm hover:bg-red-600 cursor-pointer transition-colors">
              {cat.name}
            </span>
          ))}
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-3 mb-6">
          <span className="px-4 py-2 bg-green-600/20 text-green-400 rounded-lg font-semibold">
            {movie.episode_current}
          </span>
          <span className="text-gray-400">
            {movie.episode_total}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-8">
          <button className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors">
            <ThumbsUp className="w-5 h-5" />
            Thích
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-colors">
            <Bookmark className="w-5 h-5" />
            Lưu
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-colors">
            <Share2 className="w-5 h-5" />
            Chia sẻ
          </button>
        </div>
      </div>
  )
}
