import { useRouter, usePathname } from 'next/navigation';
import { setLoading } from '@/lib/navigationLoaderStore';
import { Home, Tv, Film, Clapperboard, Bookmark, User } from 'lucide-react';

export default function MobileMenu({ setIsMobileMenuOpen }) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  const handleNavigation = (path) => {
    setLoading(true);
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="md:hidden flex flex-col gap-4 mt-4 pb-4 border-t border-gray-800 pt-4 animate-in slide-in-from-top-2">
      <button
        onClick={() => handleNavigation('/')}
        className={`flex items-center gap-3 font-semibold p-2 rounded-lg transition-colors ${isActive('/') ? 'text-red-500 bg-gray-800' : 'text-gray-300 hover:text-red-500 hover:bg-gray-800'
          }`}
      >
        <Home className="w-5 h-5" />
        Trang chủ
      </button>
      <button
        className={`flex items-center gap-3 font-semibold p-2 rounded-lg transition-colors ${isActive('/list/phim-bo') ? 'text-red-500 bg-gray-800' : 'text-gray-300 hover:text-red-500 hover:bg-gray-800'
          }`}
        onClick={() => handleNavigation('/list/phim-bo')}
      >
        <Tv className="w-5 h-5" />
        Phim bộ
      </button>
      <button
        className={`flex items-center gap-3 font-semibold p-2 rounded-lg transition-colors ${isActive('/list/phim-le') ? 'text-red-500 bg-gray-800' : 'text-gray-300 hover:text-red-500 hover:bg-gray-800'
          }`}
        onClick={() => handleNavigation('/list/phim-le')}
      >
        <Film className="w-5 h-5" />
        Phim lẻ
      </button>
      <button
        className={`flex items-center gap-3 font-semibold p-2 rounded-lg transition-colors ${isActive('/list/phim-chieu-rap') ? 'text-red-500 bg-gray-800' : 'text-gray-300 hover:text-red-500 hover:bg-gray-800'
          }`}
        onClick={() => handleNavigation('/list/phim-chieu-rap')}
      >
        <Clapperboard className="w-5 h-5" />
        Phim chiếu rạp
      </button>
      <div className="border-t border-gray-800 pt-4 mt-2 flex flex-col gap-3">
        <button className="flex items-center gap-3 hover:text-red-500 transition-colors p-2 hover:bg-gray-800 rounded-lg text-gray-300">
          <Bookmark className="w-5 h-5" />
          Danh sách
        </button>
        <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 w-full">
          <User className="w-5 h-5" />
          Đăng nhập
        </button>
      </div>
    </nav>
  );
}