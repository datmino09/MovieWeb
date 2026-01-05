"use client";
import React, { useState } from 'react';
import Header from './components/home/Header';
import FeaturedHero from './components/home/FeaturedHero';
import Categories from './components/home/Categories';
import TrendingMovies from './components/home/TrendingMovies';
import NewReleases from './components/home/NewReleases';
import Footer from './components/home/Footer';

export default function home() {

  // Demo data - Sau này thay bằng API
  const featuredMovie = {
    title: "Avatar: The Way of Water",
    description: "Jake Sully sống cùng gia đình mới của mình trên hành tinh Pandora. Khi một mối đe dọa quen thuộc trở lại...",
    rating: 8.5,
    year: 2023,
    duration: "192 phút",
    genre: "Hành động, Phiêu lưu, Sci-Fi",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=600&fit=crop"
  };

  

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navbar */}
      <Header/>

      {/* Main Content */}
      <main className="pt-32">
        {/* Featured/Hero Section */}
        <FeaturedHero featuredMovie={featuredMovie} />

        {/* Categories */}
        <Categories/>

        {/* Trending Movies */}
       <TrendingMovies/>

        {/* New Releases */}
        <NewReleases/>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}