"use client";

import { useEffect } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';

const CallBack: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const code = searchParams.get('code');

    useEffect(() => {
        if (code) {
            getAccessToken(code);
        }
    }, [code]);

    const getAccessToken = async (authorizationCode: string) => {
        console.log("authorization code", authorizationCode);
        try {
            console.log("client id", process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID as string);
            const response = await axios.post('https://accounts.spotify.com/api/token', null, {
                params: {
                    grant_type: 'authorization_code',
                    code: authorizationCode,
                    redirect_uri: process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI,
                    client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
                    client_secret: process.env.SPOTIFY_CLIENT_SECRET,
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            const { access_token, refresh_token } = response.data;

            console.log("access token", access_token);
            console.log("refresh token", refresh_token);

        } catch (error) {
            console.error('Error fetching access token', (error as any).response?.data || (error as any).message);
        }
    }

    return <div>Authentification en cours...</div>;
}

export default CallBack;