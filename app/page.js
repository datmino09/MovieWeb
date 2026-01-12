"use client";
import React from 'react';
import Header from './components/part/Header';
import Home from './page/Home';
import Footer from './components/part/Footer';
export default function home() {

  return (
    <>
      <Header/>
        <Home/>
      <Footer/>
    </>
  );
}