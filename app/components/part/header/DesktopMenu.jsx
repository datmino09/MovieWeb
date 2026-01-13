import { useRouter, usePathname } from 'next/navigation';
import { Home, Tv, Film, Clapperboard } from 'lucide-react';

export default function DesktopMenu() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="hidden md:flex items-center gap-6 mt-4">
      <button
        onClick={() => router.push('/')}
        className={`flex items-center gap-2 font-semibold transition-colors ${isActive('/') ? 'text-red-500' : 'hover:text-red-500'
          }`}
      >
        <Home className="w-5 h-5" />
        Trang chủ
      </button>
      <button
        className={`flex items-center gap-2 font-semibold transition-colors ${isActive('/list/phim-bo') ? 'text-red-500' : 'hover:text-red-500'
          }`}
        onClick={() => router.push('/list/phim-bo')}
      >
        <Tv className="w-5 h-5" />
        Phim bộ
      </button>
      <button
        className={`flex items-center gap-2 font-semibold transition-colors ${isActive('/list/phim-le') ? 'text-red-500' : 'hover:text-red-500'
          }`}
        onClick={() => router.push('/list/phim-le')}
      >
        <Film className="w-5 h-5" />
        Phim lẻ
      </button>
      <button
        className={`flex items-center gap-2 font-semibold transition-colors ${isActive('/list/phim-chieu-rap') ? 'text-red-500' : 'hover:text-red-500'
          }`}
        onClick={() => router.push('/list/phim-chieu-rap')}
      >
        <Clapperboard className="w-5 h-5" />
        Phim chiếu rạp
      </button>
    </nav>
  );
}