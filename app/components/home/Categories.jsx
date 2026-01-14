"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { setLoading } from '@/lib/navigationLoaderStore'
import { useCategories } from '../../../lib/apiCategories'
import { Film, Grid, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react'

export default function Categories() {
  const [showAll, setShowAll] = useState(false);
  const { data, isLoading, isError, error } = useCategories();
  const items = data?.data?.items || [];

  // Desktop: Hiển thị 8 categories đầu
  // Mobile: Hiển thị 6 categories đầu
  const visibleDesktopCount = showAll ? items.length : 8;
  const visibleMobileCount = showAll ? items.length : 6;

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl p-6 border border-gray-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gray-700 rounded-lg animate-pulse" />
            <div className="h-6 bg-gray-700 rounded w-32 animate-pulse" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-700 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-red-900/20 border border-red-800 rounded-xl p-6">
          <p className="text-red-400">⚠️ Lỗi tải thể loại: {error?.message}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="container mx-auto px-4 mb-12">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl p-6 border border-gray-800">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                <Grid className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Thể loại phim</h2>
                <p className="text-sm text-gray-400">Khám phá theo thể loại yêu thích</p>
              </div>
            </div>
            
            {items.length > 8 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm font-semibold"
              >
                {showAll ? (
                  <>
                    Thu gọn
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Xem tất cả ({items.length})
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {items.slice(0, visibleDesktopCount).map((cat) => (
              <Link
                key={cat._id}
                href={`/category/${cat.slug}`}
                onClick={() => setLoading(true)}
                className="group relative overflow-hidden bg-gray-800 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/20"
              >
                <div className="p-4 text-center">
                  <p className="font-semibold text-white group-hover:scale-110 transition-transform">
                    {cat.name}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/10 to-red-600/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl p-4 border border-gray-800">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center">
                <Grid className="w-5 h-5 text-red-500" />
              </div>
              <h2 className="text-lg font-bold text-white">Thể loại</h2>
            </div>
            
            {items.length > 6 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-1 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-xs font-semibold"
              >
                {showAll ? (
                  <>
                    Thu gọn
                    <ChevronUp className="w-3 h-3" />
                  </>
                ) : (
                  <>
                    +{items.length - 6}
                    <ChevronDown className="w-3 h-3" />
                  </>
                )}
              </button>
            )}
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 gap-2">
            {items.slice(0, visibleMobileCount).map((cat) => (
              <Link
                key={cat._id}
                href={`/category/${cat.slug}`}
                onClick={() => setLoading(true)}
                className="group relative overflow-hidden bg-gray-800 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 rounded-lg transition-all duration-300 active:scale-95"
              >
                <div className="p-3 text-center">
                  <p className="text-sm font-semibold text-white truncate group-hover:scale-105 transition-transform">
                    {cat.name}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/10 to-red-600/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </Link>
            ))}
          </div>

          {/* Mobile "Xem tất cả" khi thu gọn */}
          {!showAll && items.length > 6 && (
            <button
              onClick={() => setShowAll(true)}
              className="w-full mt-3 py-2.5 bg-gray-800 hover:bg-red-600 rounded-lg transition-colors text-sm font-semibold flex items-center justify-center gap-2"
            >
              Xem tất cả thể loại
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}