import Link from 'next/link';
import { setLoading } from '../lib/navigationLoaderStore';

// pagination: { totalItems, totalItemsPerPage, currentPage, pageRanges }
export default function Pagination({ pagination, basePath = '/', pageParam = 'page' }) {
  if (!pagination) return null;
  const { totalItems = 0, totalItemsPerPage = 1, currentPage = 1, pageRanges = 5 } = pagination;
  const totalPages = Math.max(1, Math.ceil(Number(totalItems) / Number(totalItemsPerPage)));
  const cur = Math.max(1, Number(currentPage) || 1);
  if (totalPages <= 1) return null;

  const half = Math.floor(pageRanges / 2);
  let start = cur - half;
  let end = cur + half;
  if (start < 1) {
    start = 1;
    end = Math.min(totalPages, start + pageRanges - 1);
  }
  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - pageRanges + 1);
  }

  const pages = [];
  for (let i = start; i <= end; i++) pages.push(i);

  const pageHref = (p) => `${basePath}${basePath.includes('?') ? '&' : '?'}${pageParam}=${p}`;

  return (
    <nav className="flex justify-center mt-6">
      <ul className="inline-flex items-center space-x-1">
        {cur > 1 && (
          <li>
            <Link href={pageHref(cur - 1)} onClick={() => setLoading(true)} className="px-3 py-1 border rounded-l hover:bg-gray-100">Prev</Link>
          </li>
        )}

        {start > 1 && (
          <>
            <li>
              <Link href={pageHref(1)} onClick={() => setLoading(true)} className="px-3 py-1 border rounded hover:bg-gray-100">1</Link>
            </li>
            {start > 2 && <li className="px-2">...</li>}
          </>
        )}

        {pages.map((p) => (
          <li key={p}>
            <Link
              href={pageHref(p)}
              onClick={() => setLoading(true)}
              className={`px-3 py-1 border rounded ${p === cur ? 'bg-red-600 text-white' : 'hover:bg-gray-100'}`}>
              {p}
            </Link>
          </li>
        ))}

        {end < totalPages && (
          <>
            {end < totalPages - 1 && <li className="px-2">...</li>}
            <li>
              <Link href={pageHref(totalPages)} onClick={() => setLoading(true)} className="px-3 py-1 border rounded hover:bg-gray-100">{totalPages}</Link>
            </li>
          </>
        )}

        {cur < totalPages && (
          <li>
            <Link href={pageHref(cur + 1)} onClick={() => setLoading(true)} className="px-3 py-1 border rounded-r hover:bg-gray-100">Next</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
