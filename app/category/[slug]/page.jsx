import React from 'react';
import Header from '@/app/components/part/Header';
import Footer from '@/app/components/part/Footer';
import Category from '@/app/page/Category';

export default async function CategoryPage({ params }) {
    const { slug } = await params;

    return (
        <>
            <Header />
            <Category slug={slug} />
            <Footer />
        </>
    );
}
