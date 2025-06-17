import { Amplify } from 'aws-amplify';
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import outputs from '../../amplify_outputs.json';
import { getUserEmail } from '@/utils/authUtils';
import { useState } from 'react';
import { Button } from '@mui/material';

Amplify.configure(outputs);

type LoginAmplifyAuthProps = {
    isNested?: boolean;
};

export default function LoginAmplifyAuth({ isNested = false }: LoginAmplifyAuthProps) {
    const [userEmail, setUserEmail] = useState<string | boolean>('')

    getUserEmail().then((email) => {
        console.log("email", email)
        setUserEmail(email)
    }).catch((e) => {
        console.warn("fetchAuthSession error", e)
    })
    return (
        <div style={!isNested ? { width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' } : {}}>
            <Authenticator socialProviders={['google']}>
                {({ signOut }) => (
                    <main>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <p>Hello {userEmail}!</p>
                            <p>Happy Learning!</p>
                            <p>👋</p>
                            <Button variant='outlined' color='error' onClick={signOut}>Sign out</Button>
                        </div>
                    </main>
                )}
            </Authenticator>
        </div>
    );
}