import React from "react";
import { useAuth } from "react-oidc-context";
import { defineAuth, secret } from '@aws-amplify/backend';

export const Login: React.FC = () => {
    console.log(window.location.hostname)
    const auth = useAuth();
    console.log(auth)

    const signOutRedirect = () => {
        const clientId = "1dbkk59stlbcn9a1mvdmggkjok";
        const logoutUri = window.location.hostname.includes('localhost') ? `http://${window.location.hostname}:5173` : `https://${window.location.hostname}`;
        const cognitoDomain = "https://khmerlish.auth.us-east-1.amazoncognito.com";
        window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    };

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Encountering error... {auth.error.message}</div>;
    }

    return (<>
        {
            auth.isAuthenticated
                ? (<div>
                    <pre> Hello: {auth.user?.profile.email} </pre>
                    <pre> Hello: {auth.user?.profile.sub} </pre>
                    <pre> ID Token: {auth.user?.id_token} </pre>
                    <pre> Access Token: {auth.user?.access_token} </pre>
                    <pre> Refresh Token: {auth.user?.refresh_token} </pre>
                    <pre> Refresh Token: {auth.user?.profile.picture} </pre>

                    <button onClick={() => signOutRedirect()}>Sign out</button>
                </div>)
                : (<div>
                    <button onClick={() => auth.signinRedirect()}>Sign in</button>
                </div>)
        }
    </>
    );
}