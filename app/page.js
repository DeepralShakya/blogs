'use client'

import { useState, useEffect, useCallback } from 'react';
import { datas } from '@/data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SkeletonCard } from '@/components/SkeletonCard';
import debounce from 'lodash/debounce';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const debouncedSearchHandler = useCallback(
    debounce((query) => {
      setDebouncedSearch(query);
    }, 300),
    []
  );

  useEffect(() => {
    debouncedSearchHandler(search);
  }, [search, debouncedSearchHandler]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const filteredPosts = datas.filter(post =>
    post.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-6">
      <input
        type="text"
        placeholder="Search posts..."
        className="mb-4 p-2 border border-gray-300 rounded"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      {isLoading ? (
        <SkeletonCard count={postsPerPage} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.length ? (
            currentPosts.map(post => (
              <div key={post.id} className="border p-4 rounded-lg shadow-lg">
                <Link href={`/${post.slug}`} className='space-y-4'>
                  <h2 className="text-2xl font-semibold">{post.title}</h2>
                  <p>{post.summary}</p>
                  <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-600 mt-4">No posts found.</p>
          )}
        </div>
      )}

      <div className="mt-4 flex justify-center space-x-2">
        <Button
          variant="primary"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        > 
          Previous
        </Button>
        <Button
          variant="primary"
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastPost >= filteredPosts.length}
        >
          Next
        </Button>
      </div>
    </div>
  );
}