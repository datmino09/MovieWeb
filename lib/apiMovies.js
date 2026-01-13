import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
async function getMovies() {
	try {
		const response = await axios.get(`${process.env.NEXT_PUBLIC_OPHIM_API_BASE}/v1/api/home`);
		return response.data;
	} catch (error) {
		console.error('getMovies error:', error);
		throw error;
	}
}
export function useMovies(options = {}) {
    return useQuery({
        queryKey: ['movies'],
        queryFn: getMovies,
        staleTime: 1000 * 60 * 5,
        ...options,
    });
}

async function getMoviesRelease() {
    try {
		const response = await axios.get(`${process.env.NEXT_PUBLIC_OPHIM_API_BASE}/v1/api/danh-sach/phim-sap-chieu`);
		return response.data;
	} catch (error) {
		console.error('getMovies error:', error);
		throw error;
	}
}
export function useMoviesRelease(options = {}) {
    return useQuery({
        queryKey: ['movies_release'],
        queryFn: getMoviesRelease,
        staleTime: 1000 * 60 * 5,
        ...options,
    });
}

async function getMoviesDetail(slug) {
    try {
		const response = await axios.get(`${process.env.NEXT_PUBLIC_OPHIM_API_BASE}/v1/api/phim/${slug}`);
		return response.data;
	} catch (error) {
		console.error('getMovies error:', error);
		throw error;
	}
}
export function useMoviesDetail(slug, options = {}) {
    return useQuery({
        queryKey: ['movies_detail', slug],
        queryFn: () => getMoviesDetail(slug),
        staleTime: 1000 * 60 * 5,
        ...options,
    });
}

async function getMoviesByCategory(slug, page) {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_OPHIM_API_BASE}/v1/api/the-loai/${slug}${page ? `?page=${page}` : ''}`);
        return response.data;
    } catch (error) {
        console.error('getMoviesByCategory error:', error);
        throw error;
    }
}

export function useMoviesByCategory(slug, page = undefined, options = {}) {
    return useQuery({
        queryKey: ['movies_by_category', slug, page],
        queryFn: () => getMoviesByCategory(slug, page),
        staleTime: 1000 * 60 * 5,
        ...options,
    });
}

async function getMoviesBySearch(keyword) {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_OPHIM_API_BASE}/v1/api/tim-kiem?keyword=${keyword}`);
        return response.data;
    } catch (error) {
        console.error('getMoviesBySearch error:', error);
        throw error;
    }
}
export function useMoviesBySearch(keyword, options = {}) {
    return useQuery({
        queryKey: ['movies_by_search', keyword],
        queryFn: () => getMoviesBySearch(keyword),
        ...options,
    });
}