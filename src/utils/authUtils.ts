import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';

export async function getUserEmail(): Promise<boolean | string> {
	try {
		const currentSession = await fetchAuthSession(); // try to refresh the session first
		const email = currentSession.tokens?.idToken?.payload.email as string;
		return email;
	} catch (err) {
		console.warn("fetchAuthSession error", err);
		return false;
	}
}
export async function isSignedIn(): Promise<boolean | string> {
	try {
		await fetchAuthSession(); // try to refresh the session first
		await getCurrentUser(); // Wait for getCurrentUser, if not logged in an exception will be thrown
	} catch (err) {
		console.warn("fetchAuthSession error", err);
		return false;
	}
	return true;
}
