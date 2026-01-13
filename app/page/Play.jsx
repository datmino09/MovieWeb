"use client";
import React, { useState } from 'react';
import VideoPlayer from '../components/play/VideoPlayer';

import { useMoviesDetail } from '@/lib/apiMovies';
import ServerSelection from '../components/play/ServerSelection';
import EpisodeNavigation from '../components/play/EpisodeNavigation';
import InfoMovie from '../components/play/left-column/InfoMovie';
import Sidebar from '../components/play/right-column/Sidebar';
export default function Play({slug}) {
  const [currentEpisode, setCurrentEpisode] = useState(0);
  const [currentServer, setCurrentServer] = useState(0);
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
    { id: 3, user: "Lê Văn C", avatar: "👤", time: "1 ngày trước", text: "Cốt truyện hấp dẫn", likes: 42 },
    { id: 4, user: "Nguyễn Thị Yến Vy", avatar: "👤", time: "100 ngày trước", text: "iu TDat", likes: 999 }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Video Player Section */}
      <section className="pt-36">
        <VideoPlayer getCurrentVideoUrl={getCurrentVideoUrl} />
        {/* Server Selection */}
        <ServerSelection movie={movie} currentServer={currentServer} setCurrentServer={setCurrentServer} setCurrentEpisode={setCurrentEpisode} />

        {/* Episode Navigation */}
        <EpisodeNavigation 
          movie={movie} 
          currentServer={currentServer}
          currentEpisode={currentEpisode}
          setCurrentEpisode={setCurrentEpisode}
        />
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Movie Info */}
          <InfoMovie movie={movie} currentServer={currentServer} comments={comments} currentEpisode={currentEpisode} setCurrentEpisode={setCurrentEpisode}/>
          {/* Right Column - Sidebar */}
          <Sidebar relatedMovies={relatedMovies} movie={movie} />
        </div>
      </div>
    </div>
  );
}