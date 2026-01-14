import React from 'react'

export default function TabEpisodes({ movie, currentServer,currentEpisode, setCurrentEpisode }) {
  return (
    <div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {movie.episodes[currentServer]?.server_data.map((ep, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentEpisode(idx)}
                className={`p-4 rounded-lg font-semibold transition-all ${currentEpisode === idx
                  ? 'bg-red-600 text-white scale-105'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  }`}
              >
                {ep.name}
              </button>
            ))}
          </div>
        </div>
  )
}
