import React from 'react'
import { Loader2, Search as SearchIcon, Star, Play } from 'lucide-react'

export default function Search({ isLoading, isError, searchResults, debouncedQuery, handleMovieClick }) {
    return (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl max-h-[500px] overflow-y-auto">
                    {isLoading ? (
                        <div className="p-8 text-center text-gray-400">
                            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2" />
                            <p>Đang tìm kiếm...</p>
                        </div>
                    ) : isError ? (
                        <div className="p-8 text-center text-red-400">
                            <p className="font-semibold mb-1">Có lỗi xảy ra</p>
                            <p className="text-sm">Vui lòng thử lại sau</p>
                        </div>
                    ) : searchResults && searchResults.length > 0 ? (
                        <>
                            <div className="p-3 border-b border-gray-800">
                                <p className="text-sm text-gray-400">
                                    Tìm thấy {searchResults.params?.pagination?.totalItems || 0} kết quả cho "<span className="text-white">{debouncedQuery}</span>"
                                </p>
                            </div>
        
                            <div className="py-2">
                                {searchResults && searchResults.map((movie) => (
                                    <div
                                        key={movie._id || movie.id}
                                        onClick={() => handleMovieClick(movie.slug)}
                                        className="flex items-start gap-3 p-3 hover:bg-gray-800 cursor-pointer transition-colors group"
                                    >
                                        {/* Thumbnail */}
                                        <div className="relative w-16 h-24 flex-shrink-0 rounded overflow-hidden bg-gray-800">
                                            <img
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE}${movie.thumb_url}`}
                                                alt={movie.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/100x150?text=No+Image';
                                                }}
                                            />
                                            {movie.quality && (
                                                <div className="absolute top-1 right-1 bg-black/70 px-1.5 py-0.5 rounded text-xs font-semibold">
                                                    {movie.quality}
                                                </div>
                                            )}
                                        </div>
        
                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-white group-hover:text-red-500 transition-colors truncate">
                                                {movie.name}
                                            </h4>
                                            <p className="text-sm text-gray-400 truncate mb-1">{movie.origin_name}</p>
        
                                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                {movie.year && (
                                                    <>
                                                        <span className="text-xs text-gray-400">{movie.year}</span>
                                                        <span className="text-gray-600">•</span>
                                                    </>
                                                )}
                                                {movie.lang && (
                                                    <>
                                                        <span className="text-xs text-gray-400">{movie.lang}</span>
                                                        <span className="text-gray-600">•</span>
                                                    </>
                                                )}
                                                {movie.tmdb?.vote_average && (
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                                        <span className="text-xs text-gray-400">{movie.tmdb.vote_average}</span>
                                                    </div>
                                                )}
                                            </div>
        
                                            {movie.category && movie.category.length > 0 && (
                                                <div className="flex gap-1">
                                                    {movie.category.slice(0, 2).map((cat, idx) => (
                                                        <span key={idx} className="text-xs px-2 py-0.5 bg-gray-800 rounded text-gray-400">
                                                            {cat.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
        
                                        {/* Play Icon */}
                                        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Play className="w-8 h-8 text-red-600" />
                                        </div>
                                    </div>
                                ))}
                            </div>
        
                            {/* {searchResults.length >= 5 && (
                                <div className="p-3 border-t border-gray-800">
                                  <button
                                    onClick={handleViewAll}
                                    className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors"
                                  >
                                    Xem tất cả kết quả
                                  </button>
                                </div>
                              )} */}
                        </>
                    ) : (
                        <div className="p-8 text-center text-gray-400">
                            <SearchIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                            <p className="font-semibold mb-1">Không tìm thấy kết quả</p>
                            <p className="text-sm">Thử tìm kiếm với từ khóa khác</p>
                        </div>
                    )}
                </div>
    )
}