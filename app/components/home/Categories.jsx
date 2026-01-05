import React from 'react'

export default function Categories() {
    const categories = [
    "Hành động", "Hài kịch", "Kinh dị", "Tình cảm", "Sci-Fi", "Hoạt hình"
  ];
  return (
    <section className="container mx-auto px-4 mb-12">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                className="px-6 py-2 bg-gray-800 hover:bg-red-600 rounded-full whitespace-nowrap transition-colors font-semibold"
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
  )
}
