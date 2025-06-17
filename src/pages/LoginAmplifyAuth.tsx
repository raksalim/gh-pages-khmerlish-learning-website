import { Amplify } from 'aws-amplify';
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import outputs from '../../amplify_outputs.json';
import { Button } from '@mui/material';
import { AuthUser } from 'aws-amplify/auth';


Amplify.configure(outputs);

type LoginAmplifyAuthProps = {
    userEmail: string | boolean;
    setUserEmail: (email: string | boolean) => void;
    isNested?: boolean;
};

export default function LoginAmplifyAuth({ isNested = false, userEmail, setUserEmail }: LoginAmplifyAuthProps) {
    // Update userEmail when user changes
    return (
        <div dir="ltr" style={!isNested ? { width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' } : {}}>
            <Authenticator socialProviders={['google']}>
                {({ signOut, user }) => {
                    // useEffect cannot be used inside a function, so we need to lift user state up
                    // We'll use a wrapper component to handle this
                    return <LoginContent user={user} signOut={signOut} userEmail={userEmail} setUserEmail={setUserEmail} />;
                }}
            </Authenticator>
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