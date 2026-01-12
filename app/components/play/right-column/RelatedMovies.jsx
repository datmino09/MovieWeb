import React from 'react'
import { 
   Star, 
  Film, TrendingUp,
} from 'lucide-react';
export default function RelatedMovies({ relatedMovies }) {
  return (
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
  )
}
