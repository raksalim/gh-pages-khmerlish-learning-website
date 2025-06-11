import React from "react";
import { useAuth } from "react-oidc-context";

export const Login: React.FC = () => {
    console.log(window.location.hostname)
    const auth = useAuth();
    console.log(auth)

    const signOutRedirect = () => {
        auth.removeUser()
        const clientId = '5vb2i2a2tbdaat794gjq8tups';
        const logoutUri = window.location.hostname.includes('localhost') ? `http://${window.location.hostname}:5173` : `https://${window.location.hostname}`;
        const cognitoDomain = "https://us-east-2w8zbAeSTu.auth.us-east-2.amazoncognito.com";
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