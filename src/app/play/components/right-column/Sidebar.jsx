import React from 'react'

import MoviePoster from './MoviePoster';
import RelatedMovies from './RelatedMovies';
export default function Sidebar({ relatedMovies, movie }) {
  return (
    <div>
      <div className="space-y-6">
            {/* Movie Poster */}
           <MoviePoster movie={movie} />

            {/* Related Movies */}
            <RelatedMovies relatedMovies={relatedMovies} />
          </div>
    </div>
  )
}
