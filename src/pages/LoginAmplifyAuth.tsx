import { Amplify } from 'aws-amplify';
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import outputs from '../../amplify_outputs.json';
import { fetchUserAttributes } from 'aws-amplify/auth';

Amplify.configure(outputs);


export default function LoginAmplifyAuth() {
    return (
        <Authenticator socialProviders={['google']}>
            {({ signOut, user }) => (
                <main>
                    <h1>Hello {user?.username}</h1>
                    <button onClick={signOut}>Sign out</button>
                </main>
            )}
        </Authenticator>
    );

}