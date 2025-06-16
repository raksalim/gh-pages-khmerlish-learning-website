import {
	fetchAuthSession,
	getCurrentUser,
	fetchUserAttributes,
} from 'aws-amplify/auth';

export async function getUserEmail(): Promise<boolean | string> {
	try {
		const userAttributes = await fetchUserAttributes();
		console.log('User email:', userAttributes.email);
		return userAttributes.email as string;
	} catch (err) {
		console.warn('fetchAuthSession error', err);
		return false;
	}
}
export async function isSignedIn(): Promise<boolean | string> {
	try {
		await fetchAuthSession(); // try to refresh the session first
		await getCurrentUser(); // Wait for getCurrentUser, if not logged in an exception will be thrown
	} catch (err) {
		console.warn('fetchAuthSession error', err);
		return false;
	}
	return true;
}
