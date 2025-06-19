import { referenceAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */

export const auth = referenceAuth({
	userPoolId: 'us-east-1_LMP9WdNs7',
	identityPoolId: 'us-east-1:e0405b03-6a53-4781-96fa-b49d7323e590',
	authRoleArn:
		'arn:aws:iam::554578329341:role/service-role/khmerlish_learner_app_authenticated_iam_role',
	unauthRoleArn:
		'arn:aws:iam::554578329341:role/service-role/khmerlish_learner_app_unauthenticated_iam_role',
	userPoolClientId: '672s0od75o0n73kpj8duofjdtt',
});
