import React from 'react'

export default function ServerSelection({movie, currentServer, setCurrentServer, setCurrentEpisode }) {
  return (
    <div>
      {movie.episodes.length > 1 && (
          <div className="bg-gray-900 border-b border-gray-800">
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-gray-400 font-semibold">Server:</span>
                {movie.episodes.map((server, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentServer(idx);
                      setCurrentEpisode(0);
                    }}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      currentServer === idx
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                    }`}
                  >
                    {server.server_name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
    </div>
  )
}
