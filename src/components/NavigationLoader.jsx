"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { subscribe, getLoading, setLoading } from "@/lib/navigationLoaderStore";
import { Film } from "lucide-react";

export default function NavigationLoader() {
  const pathname = usePathname();
  const [loading, setLocalLoading] = useState(getLoading());

  useEffect(() => {
    // Reset loading khi component mount
    setLoading(false);
    const unsub = subscribe(setLocalLoading);
    return unsub;
  }, []);

  useEffect(() => {
    // stop loading when path changes (navigation finished)
    if (loading) setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="absolute inset-0 animate-ping">
            <Film className="w-20 h-20 text-red-600 opacity-20 mx-auto" />
          </div>
          <Film className="w-20 h-20 text-red-600 relative animate-pulse mx-auto" />
        </div>
        
        {/* Brand Name */}
        <h2 className="text-3xl font-bold mb-4">
          Movie<span className="text-red-600">Hub</span>
        </h2>
        
        {/* Loading Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-red-600 to-red-400 animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>
        
        <p className="text-gray-400 mt-4 text-sm">Đang tải...</p>
      </div>
    </div>
  );
}
