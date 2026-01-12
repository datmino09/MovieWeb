import React from 'react';
import Header from '@/app/components/part/Header';
import Play from '@/app/page/Play';
import Footer from '@/app/components/part/Footer';

export default async function PlayPage({ params }) {
  const { slug } = await params;
  
  return (
    <>
      <Header />
      <Play slug={slug} />
      <Footer />
    </>
  );
}