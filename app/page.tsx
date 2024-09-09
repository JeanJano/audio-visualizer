"use client";

import React, { use, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('spotify_access_token');
        if (!token) {
            router.push('/login');
        } else {
            router.push('/home');
        }
    }, [router]);

    return <div>Redirection vers spotify...</div>;
}

export default HomePage;