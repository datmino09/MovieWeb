import React from 'react'
import { Film } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Film className="w-8 h-8 text-red-600" />
                <span className="text-xl font-bold">MovieHub</span>
              </div>
              <p className="text-gray-400">
                Nền tảng xem phim trực tuyến hàng đầu Việt Nam
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Danh mục</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-red-500 transition-colors">Phim lẻ</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Phim bộ</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Hoạt hình</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">TV Shows</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Hỗ trợ</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-red-500 transition-colors">Trung tâm trợ giúp</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Liên hệ</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Điều khoản</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Chính sách</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Kết nối</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-red-500 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 MovieHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
