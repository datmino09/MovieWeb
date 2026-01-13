"use client";
import { useState, useEffect, useRef } from 'react';
import React from 'react'
import { Film, Search as SearchIcon, Bookmark, User, Home, TrendingUp, Grid, Star, Play, Clock, X, Loader2, Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useMoviesBySearch } from '@/lib/apiMovies';
import Search from './Search';
import MobieSearch from './MobieSearch';
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu';
export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);
  const router = useRouter();

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Gọi API với debounced query
  const { data, isLoading, isError } = useMoviesBySearch(debouncedQuery, {
    enabled: debouncedQuery.trim().length >= 2, // Chỉ gọi API khi >= 2 ký tự
    staleTime: 5 * 60 * 1000, // Cache 5 phút
  });

  const searchResults = data?.data?.items || [];

  // Show results khi có query và data
  useEffect(() => {
    if (debouncedQuery.trim().length >= 2 && !isLoading) {
      setShowResults(true);
    }
    console.log("Show results:", searchResults);
  }, [debouncedQuery, isLoading]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMovieClick = (slug) => {
    router.push(`/play/${slug}`);
    setShowResults(false);
    setSearchQuery('');
    setDebouncedQuery('');
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setDebouncedQuery('');
    setShowResults(false);
  };



  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}>
            <Film className="w-8 h-8 text-red-600" />
            <span className="text-2xl font-bold">Movie<span className="text-red-600">Hub</span></span>
          </div>

          {/* Search Bar with Dropdown */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8" ref={searchRef}>
            <div className="relative w-full">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
              <input
                type="text"
                placeholder="Tìm kiếm phim, diễn viên..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => debouncedQuery.length >= 2 && setShowResults(true)}
                className="w-full bg-gray-900 border border-gray-700 rounded-full pl-12 pr-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
              />

              {/* Clear/Loading Button */}
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <X className="w-5 h-5" />
                  )}
                </button>
              )}

              {/* Search Results Dropdown */}
              {showResults && debouncedQuery.length >= 2 && (
                <Search
                  isLoading={isLoading}
                  isError={isError}
                  searchResults={searchResults}
                  debouncedQuery={debouncedQuery}
                  handleMovieClick={handleMovieClick}
                />
              )}
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block hover:text-red-500 transition-colors">
              <Bookmark className="w-6 h-6" />
            </button>
            <button className="hidden md:flex bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-semibold transition-colors items-center gap-2">
              <User className="w-5 h-5" />
              Đăng nhập
            </button>
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <DesktopMenu />

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
        )}
      </div>

      {/* Mobile Search */}
      {/* Mobile Search */}
      <MobieSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isLoading={isLoading}
        handleClearSearch={handleClearSearch}
        searchResults={searchResults}
        debouncedQuery={debouncedQuery}
        isError={isError}
        handleMovieClick={handleMovieClick}
      />
    </header>
  );
}