import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
	loginWith: {
		email: true,
		// externalProviders: {
		// 	google: {
		// 		clientId: secret('VITE_GOOGLE_CLIENT_ID'),
		// 		clientSecret: secret('VITE_GOOGLE_CLIENT_SECRET'),
		// 	},
		// 	callbackUrls: [
		// 		'http://localhost:5173/',
		// 		'https://khmerlish.com/',
		// 		'https://www.khmerlish.com/',
		// 		'https://learn.khmerlish.com/',
		// 		'https://khmerlish.net/',
		// 		'https://www.khmerlish.net/',
		// 	],
		// 	logoutUrls: [
		// 		'http://localhost:5173/',
		// 		'https://khmerlish.com/',
		// 		'https://www.khmerlish.com/',
		// 		'https://learn.khmerlish.com/',
		// 		'https://khmerlish.net/',
		// 		'https://www.khmerlish.net/',
		// 	],
		// },
	},
	userAttributes: {
		'custom:userTier': {
			dataType: 'String',
			mutable: true,
		},
	},
});
