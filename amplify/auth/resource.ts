import { referenceAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = referenceAuth({
	userPoolId: 'us-east-2_w8zbAeSTu',
	identityPoolId: 'us-east-2:9326978b-558f-4bd1-b60a-fd60d98fdf5a',
	authRoleArn:
		'arn:aws:iam::554578329341:role/service-role/khmerlish_learn_authenticated_users',
	unauthRoleArn:
		'arn:aws:iam::554578329341:role/service-role/khmerlish_learn_unauthenticated_users_IAM_role',
	userPoolClientId: '5vb2i2a2tbdaat794gjq8tups',
});
