import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

 
async function getCategories() {
	try {
		const response = await axios.get(`${process.env.NEXT_PUBLIC_OPHIM_API_BASE}/v1/api/the-loai`);
		return response.data;
	} catch (error) {
		console.error('getCategories error:', error);
		throw error;
	}
}

export function useCategories(options = {}) {
	return useQuery({
		queryKey: ['categories'],
		queryFn: getCategories,
		staleTime: 1000 * 60 * 10,
		...options,
	});
}

export default getCategories;

