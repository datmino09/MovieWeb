"use client";
import React from 'react';
import Header from './components/part/Header';
import Play from './page/Play';
import Home from './page/Home';
import Footer from './components/part/Footer';
import Link from 'next/link';
export default function home() {

  return (
    <>
      <Header/>
        <Home/>
      <Footer/>
    </>
  );
}