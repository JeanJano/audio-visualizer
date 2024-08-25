"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
        const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;
        const scopes = encodeURIComponent('user-read-private user-read-email');

        const spotifyAuthUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scopes}&redirect_uri=${encodeURIComponent(redirectUri as string)}`;

        window.location.href = spotifyAuthUrl;
    }, [router]);

    return <div>Redirection vers spotify...</div>;
}

export default LoginPage;