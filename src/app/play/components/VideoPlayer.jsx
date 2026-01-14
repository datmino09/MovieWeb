'use client'
import React from 'react'
export default function VideoPlayer({ getCurrentVideoUrl }) {
  return (
    <div className="relative bg-black aspect-video max-w-7xl mx-auto">
          <iframe
            src={getCurrentVideoUrl()}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
    </div>
  )
}
