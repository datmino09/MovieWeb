"use client"

import React from 'react'
import Link from 'next/link'
import { useCategories } from '../../../lib/apiCategories'

export default function Categories() {
  const { data, isLoading, isError, error } = useCategories();
  const items = data?.data?.items || [];

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 mb-12">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <div className="px-6 py-2 bg-gray-800 rounded-full animate-pulse w-24 h-8" />
        </div>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="container mx-auto px-4 mb-12">
        <div className="text-red-400">Lỗi tải thể loại: {error?.message}</div>
      </section>
    )
  }

  return (
    <section className="container mx-auto px-4 mb-12">
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {items.map((cat) => (
          <Link
            key={cat._id}
            href={`/category/${cat.slug}`}
            className="px-6 py-2 bg-gray-800 hover:bg-red-600 rounded-full whitespace-nowrap transition-colors font-semibold text-white block"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </section>
  )
}
