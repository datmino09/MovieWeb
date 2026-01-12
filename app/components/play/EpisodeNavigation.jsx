import React from 'react'
import {ChevronLeft, ChevronRight} from 'lucide-react';
export default function EpisodeNavigation({movie, currentServer, currentEpisode, setCurrentEpisode }) {
  return (
    <div>
      {movie.type === 'series' && movie.episodes[currentServer]?.server_data.length > 0 && (
          <div className="bg-gray-900 border-b border-gray-800">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <button 
                disabled={currentEpisode === 0}
                onClick={() => setCurrentEpisode(currentEpisode - 1)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Tập trước
              </button>
              
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Đang xem:</span>
                <span className="font-bold text-red-500">
                  {movie.episodes[currentServer]?.server_data[currentEpisode]?.name || 'Tập 1'}
                </span>
                <span className="text-gray-400">
                  / {movie.episodes[currentServer]?.server_data.length || 0} tập
                </span>
              </div>

              <button 
                disabled={currentEpisode === (movie.episodes[currentServer]?.server_data.length - 1)}
                onClick={() => setCurrentEpisode(currentEpisode + 1)}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Tập tiếp theo
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
    </div>
  )
}
