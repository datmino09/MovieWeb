import React from 'react'

export default function TabInfo({ movie,getCleanContent }) {
  return (
    <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Nội dung phim</h3>
            <p className="text-gray-300 leading-relaxed">{getCleanContent(movie.content)}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-gray-400">Đạo diễn:</span>
              <span className="ml-2 font-semibold">{movie.director.join(', ')}</span>
            </div>
            <div>
              <span className="text-gray-400">Quốc gia:</span>
              <span className="ml-2 font-semibold">
                {movie.country.map(c => c.name).join(', ')}
              </span>
            </div>
            <div>
              <span className="text-gray-400">Trạng thái:</span>
              <span className="ml-2 font-semibold capitalize">{movie.status}</span>
            </div>
            <div>
              <span className="text-gray-400">Năm phát hành:</span>
              <span className="ml-2 font-semibold">{movie.year}</span>
            </div>
          </div>

          <div>
            <span className="text-gray-400 block mb-2">Diễn viên:</span>
            <div className="flex flex-wrap gap-2">
              {movie.actor.map((actor, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-red-600 cursor-pointer transition-colors">
                  {actor}
                </span>
              ))}
            </div>
          </div>

          {movie.alternative_names && movie.alternative_names.length > 0 && (
            <div>
              <span className="text-gray-400 block mb-2">Tên khác:</span>
              <p className="text-sm text-gray-300">{movie.alternative_names.join(', ')}</p>
            </div>
          )}
        </div>
  )
}
