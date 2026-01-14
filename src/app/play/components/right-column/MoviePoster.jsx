import React from 'react'

export default function MoviePoster({ movie }) {
  return (
     <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE + movie.thumb_url}`}
                alt={movie.name}
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `${process.env.NEXT_PUBLIC_IMAGE_BASE || ''}${movie.thumb_url}`;
                }}
              />
            </div>
  )
}
