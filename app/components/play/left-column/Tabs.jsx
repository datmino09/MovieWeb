import React from 'react'

export default function Tabs({ activeTab, setActiveTab, movie, currentServer, comments }) {
  return (
    <div className="border-b border-gray-800 mb-6">
        <div className="flex gap-6">
          <button
            onClick={() => setActiveTab('info')}
            className={`pb-4 font-semibold transition-colors ${activeTab === 'info'
              ? 'text-red-500 border-b-2 border-red-500'
              : 'text-gray-400 hover:text-white'
              }`}
          >
            Thông tin
          </button>
          {movie.type !== "single" && (
            <button
              onClick={() => setActiveTab('episodes')}
              className={`pb-4 font-semibold transition-colors ${activeTab === 'episodes'
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              Tập phim ({movie.episodes[currentServer]?.server_data.length})
            </button>
          )}
          <button
            onClick={() => setActiveTab('comments')}
            className={`pb-4 font-semibold transition-colors ${activeTab === 'comments'
              ? 'text-red-500 border-b-2 border-red-500'
              : 'text-gray-400 hover:text-white'
              }`}
          >
            Bình luận ({comments.length})
          </button>
        </div>
      </div>
  )
}
