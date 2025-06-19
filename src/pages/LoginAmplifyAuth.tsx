import { Amplify } from 'aws-amplify';
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import outputs from '../../amplify_outputs.json';
import { Button, Checkbox } from '@mui/material';
import { AuthUser } from 'aws-amplify/auth';
import { useState } from 'react';


Amplify.configure(outputs);

type LoginAmplifyAuthProps = {
    userEmail: string | boolean;
    setUserEmail: (email: string | boolean) => void;
    isNested?: boolean;
};

export default function LoginAmplifyAuth({ isNested = false, userEmail, setUserEmail }: LoginAmplifyAuthProps) {

    const [isNotMinorCheckboxChecked, setIsNotMinorCheckboxChecked] = useState(false);
    // Update userEmail when user changes
    return (
        <div dir="ltr" style={!isNested ? { width: '100%', display: 'flex', flexDirection: 'column', minHeight: '80vh', alignItems: 'center' } : {}}>
            {!userEmail && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Checkbox value={isNotMinorCheckboxChecked} onChange={() => setIsNotMinorCheckboxChecked(!isNotMinorCheckboxChecked)} />
                <label htmlFor="disabled-checkbox" style={{ margin: 0 }}>I am over 13 years old.</label>
            </div>}
            <div style={{ opacity: isNotMinorCheckboxChecked || userEmail ? 1 : 0.5, pointerEvents: isNotMinorCheckboxChecked || userEmail ? 'auto' : 'none' }}>
                <Authenticator socialProviders={['google']}>
                    {({ signOut, user }) => {
                        return <LoginContent user={user} signOut={signOut} userEmail={userEmail} setUserEmail={setUserEmail} />;
                    }}
                </Authenticator>
            </div>
        </div>
    );
}

// Wrapper component to handle side effects
function LoginContent({ user, signOut, userEmail, setUserEmail }: { user: AuthUser | undefined, signOut: (() => void) | undefined, userEmail: string | boolean, setUserEmail: (email: string | boolean) => void }) {
    const refreshUser = () => {
        if (user?.signInDetails?.loginId) {
            setUserEmail(user.signInDetails.loginId);
        } else {
            setUserEmail(false);
        }
    }
    return (
        <main>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <p>Hello {userEmail}</p>
                <p>Happy Learning</p>
                <p>👋</p>
                <Button variant='outlined' color='error' onClick={() => { if (signOut) signOut(); refreshUser(); }}>Sign out</Button>
            </div>
        </main >
    );
}