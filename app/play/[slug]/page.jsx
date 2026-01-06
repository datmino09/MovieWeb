"use client";
import React from 'react';
import Header from '@/app/components/part/Header';
import Play from '@/app/page/Play';
import Footer from '@/app/components/part/Footer';

export default async function PlayPage({ params }) {
  // ⭐ Thêm await ở đây
  const { slug } = await params;
  
  console.log('✅ Slug nhận được từ URL:', slug);
  
  return (
    <>
      <Header />
      <Play slug={slug} />
      <Footer />
    </>
  );
}