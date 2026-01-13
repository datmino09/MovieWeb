import React from 'react';
import Header from '@/app/components/part/header/Header';
import Footer from '@/app/components/part/Footer';
import List from '@/app/page/List';

export default async function ListPage({ params }) {
    const { slug } = await params;

    return (
        <>
            <Header />
            <List slug={slug} />
            <Footer />
        </>
    );
}
