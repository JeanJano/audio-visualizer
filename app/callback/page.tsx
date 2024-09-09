"use client";

import { useEffect } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';

const CallBack: React.FC = () => {
    const searchParams = useSearchParams();
    const code = searchParams.get('code');

    useEffect(() => {
        if (code) {
            getAccessToken(code);
        }
    }, [code]);

    const getAccessToken = async (authorizationCode: string) => {
        try {
            const response = await fetch('/api/spotify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code: authorizationCode })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            const { access_token, refresh_token } = data;

            console.log("Access Token:", access_token);
            console.log("Refresh Token:", refresh_token);

            localStorage.setItem('spotify_access_token', access_token);
            localStorage.setItem('spotify_refresh_token', refresh_token);

            const router = useRouter();
            router.push('/home')
        } catch (error) {
            console.error('Error fetching access token:', error);
        }
    };

    return <div>Authentification en cours...</div>;
};

export default CallBack;