import { Search as SearchIcon, X, Loader2 } from 'lucide-react';
import Search from './Search';

export default function MobieSearch({
    searchQuery,
    setSearchQuery,
    isLoading,
    handleClearSearch,
    searchResults,
    debouncedQuery,
    isError,
    handleMovieClick
}) {
    return (
        <div className="md:hidden px-4 pb-4">
            <div className="relative">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded-full pl-12 pr-12 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                />
                {searchQuery && (
                    <button
                        onClick={handleClearSearch}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                        {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <X className="w-5 h-5" />
                        )}
                    </button>
                )}

                {searchQuery.length >= 2 && (
                    <div className="absolute top-full left-0 right-0 z-50 mt-2">
                        <Search
                            isLoading={isLoading}
                            isError={isError}
                            searchResults={searchResults}
                            debouncedQuery={debouncedQuery}
                            handleMovieClick={handleMovieClick}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}