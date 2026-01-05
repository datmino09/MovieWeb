import { useState } from 'react';
import React from 'react'
import { Film, Search, Bookmark, User, Home, TrendingUp, Grid, Clock } from 'lucide-react';
export default function Header() {
 const [searchQuery, setSearchQuery] = useState('');
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Film className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-bold">Movie<span className="text-red-600">Hub</span></span>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Tìm kiếm phim, diễn viên..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-700 rounded-full pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <button className="hover:text-red-500 transition-colors">
                <Bookmark className="w-6 h-6" />
              </button>
              <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-semibold transition-colors flex items-center gap-2">
                <User className="w-5 h-5" />
                Đăng nhập
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 mt-4">
            <button className="flex items-center gap-2 text-red-500 font-semibold">
              <Home className="w-5 h-5" />
              Trang chủ
            </button>
            <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <TrendingUp className="w-5 h-5" />
              Xu hướng
            </button>
            <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <Grid className="w-5 h-5" />
              Thể loại
            </button>
            <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <Clock className="w-5 h-5" />
              Mới cập nhật
            </button>
          </nav>
        </div>
      </header>
  )
}
