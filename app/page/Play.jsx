"use client";
import React, { useState } from 'react';
import { 
  ChevronLeft, ChevronRight, Star, Clock, Calendar,
  Share2, Bookmark, ThumbsUp, MessageSquare, Users,
  Film, TrendingUp, X, Eye
} from 'lucide-react';
import { useMoviesDetail } from '@/lib/apiMovies';

export default function Play({slug}) {
  console.log('Play.jsx received slug:', slug);
  const [currentEpisode, setCurrentEpisode] = useState(0);
  const [currentServer, setCurrentServer] = useState(0);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [activeTab, setActiveTab] = useState('info');
  const {data, isLoading, isError, error} = useMoviesDetail(slug);
  const movie = data?.data?.item;
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

  // Parse HTML content
  const getCleanContent = (htmlContent) => {
    return htmlContent.replace(/<[^>]*>/g, '');
  };

  // Get current video URL
  const getCurrentVideoUrl = () => {
    if (movie.episodes[currentServer]?.server_data[currentEpisode]) {
      return movie.episodes[currentServer].server_data[currentEpisode].link_embed;
    }
    return movie.trailer_url || '';
  };

  // Demo related movies
  const relatedMovies = [
    { id: 2, title: "Phim tương tự 1", poster: `https://upload.wikimedia.org/wikipedia/vi/4/4c/Deadpool_%26_Wolverine_poster.jpg`, rating: 8.2 },
    { id: 3, title: "Phim tương tự 2", poster: `https://upload.wikimedia.org/wikipedia/vi/4/4c/Deadpool_%26_Wolverine_poster.jpg`, rating: 7.9 },
    { id: 4, title: "Phim tương tự 3", poster: `https://upload.wikimedia.org/wikipedia/vi/4/4c/Deadpool_%26_Wolverine_poster.jpg`, rating: 8.5 },
    { id: 5, title: "Phim tương tự 4", poster: `https://upload.wikimedia.org/wikipedia/vi/4/4c/Deadpool_%26_Wolverine_poster.jpg`, rating: 9.0 }
  ];

  // Demo comments
  const comments = [
    { id: 1, user: "Nguyễn Văn A", avatar: "👤", time: "2 giờ trước", text: "Phim hay quá!", likes: 24 },
    { id: 2, user: "Trần Thị B", avatar: "👤", time: "5 giờ trước", text: "Diễn xuất tuyệt vời!", likes: 15 },
    { id: 3, user: "Lê Văn C", avatar: "👤", time: "1 ngày trước", text: "Cốt truyện hấp dẫn", likes: 42 }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Video Player Section */}
      <section className="pt-36">
        <div className="relative bg-black aspect-video max-w-7xl mx-auto">
          <iframe
            src={getCurrentVideoUrl()}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Server Selection */}
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

        {/* Episode Navigation */}
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
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Movie Info */}
          <div className="lg:col-span-2">
            {/* Title and Stats */}
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

            {/* Tabs */}
            <div className="border-b border-gray-800 mb-6">
              <div className="flex gap-6">
                <button 
                  onClick={() => setActiveTab('info')}
                  className={`pb-4 font-semibold transition-colors ${
                    activeTab === 'info' 
                      ? 'text-red-500 border-b-2 border-red-500' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Thông tin
                </button>
                {movie.type === 'series' && movie.episodes[currentServer]?.server_data.length > 0 && (
                  <button 
                    onClick={() => setActiveTab('episodes')}
                    className={`pb-4 font-semibold transition-colors ${
                      activeTab === 'episodes' 
                        ? 'text-red-500 border-b-2 border-red-500' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Tập phim ({movie.episodes[currentServer]?.server_data.length})
                  </button>
                )}
                <button 
                  onClick={() => setActiveTab('comments')}
                  className={`pb-4 font-semibold transition-colors ${
                    activeTab === 'comments' 
                      ? 'text-red-500 border-b-2 border-red-500' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Bình luận ({comments.length})
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'info' && (
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
            )}

            {activeTab === 'episodes' && (
              <div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {movie.episodes[currentServer]?.server_data.map((ep, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentEpisode(idx)}
                      className={`p-4 rounded-lg font-semibold transition-all ${
                        currentEpisode === idx
                          ? 'bg-red-600 text-white scale-105'
                          : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                      }`}
                    >
                      {ep.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'comments' && (
              <div className="space-y-6">
                {/* Comment Form */}
                <div className="bg-gray-900 rounded-lg p-6">
                  {!showCommentForm ? (
                    <button 
                      onClick={() => setShowCommentForm(true)}
                      className="w-full py-3 border-2 border-dashed border-gray-700 rounded-lg text-gray-400 hover:border-red-600 hover:text-red-500 transition-colors"
                    >
                      Nhấn để viết bình luận...
                    </button>
                  ) : (
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold">Viết bình luận</h3>
                        <button 
                          onClick={() => setShowCommentForm(false)}
                          className="text-gray-400 hover:text-white"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <textarea 
                        placeholder="Chia sẻ cảm nhận của bạn về bộ phim..."
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 resize-none"
                        rows="4"
                      ></textarea>
                      <div className="flex justify-end gap-3 mt-4">
                        <button 
                          onClick={() => setShowCommentForm(false)}
                          className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                        >
                          Hủy
                        </button>
                        <button className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors font-semibold">
                          Đăng
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Comments List */}
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="bg-gray-900 rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-2xl">
                          {comment.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold">{comment.user}</span>
                            <span className="text-gray-400 text-sm">{comment.time}</span>
                          </div>
                          <p className="text-gray-300 mb-3">{comment.text}</p>
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
                              <ThumbsUp className="w-4 h-4" />
                              <span className="text-sm">{comment.likes}</span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
                              <MessageSquare className="w-4 h-4" />
                              <span className="text-sm">Trả lời</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Movie Poster */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE + movie.thumb_url}`}
                alt={movie.name}
                className="w-full h-auto"
                onError={(e) => {
                  e.target.src = `${CDN_IMAGE}/uploads/${movie.thumb_url}`;
                }}
              />
            </div>

            {/* Related Movies */}
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-lg">Phim liên quan</h3>
              </div>
              <div className="space-y-4">
                {relatedMovies.map((m) => (
                  <div key={m.id} className="flex gap-3 cursor-pointer group">
                    <div className="w-24 h-36 rounded overflow-hidden flex-shrink-0">
                      <img 
                        src={m.poster} 
                        alt={m.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 group-hover:text-red-500 transition-colors line-clamp-2">
                        {m.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-semibold">{m.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ad Space */}
            <div className="bg-gradient-to-br from-red-600/20 to-purple-600/20 rounded-lg p-6 border border-gray-800">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">Quảng cáo</p>
                <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                  <Film className="w-16 h-16 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}