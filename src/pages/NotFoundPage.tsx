import { fetchUserAttributes } from 'aws-amplify/auth';

async function NotFoundPage() {
    let userAttributes = null;
    try {
        userAttributes = await fetchUserAttributes();
        console.log(userAttributes);
    } catch (e) {
        console.warn('User not authenticated or missing scopes', e);
    }
    return (
        <>
            <p className="read-the-docs">
                404 Not Found
            </p>

        </>
    )
}

export default NotFoundPage
