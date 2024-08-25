"use client";

import React, { use, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/login');
    }, [router]);

    return <div>Redirection vers spotify...</div>;
}

export default HomePage;