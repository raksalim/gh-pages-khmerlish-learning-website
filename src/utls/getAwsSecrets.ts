import {
	SecretsManagerClient,
	GetSecretValueCommand,
} from '@aws-sdk/client-secrets-manager';

// This function retrieves a secret from AWS Secrets Manager.
export const getAwsSecret = async (
	secret_name = process.env.KHMERLISH_SECRET_NAME || ''
) => {
	const client = new SecretsManagerClient({
		region: 'us-east-2',
	});

	let response;

	try {
		response = await client.send(
			new GetSecretValueCommand({
				SecretId: secret_name,
				VersionStage: 'AWSCURRENT', // VersionStage defaults to AWSCURRENT if unspecified
			})
		);
	} catch (error) {
		// For a list of exceptions thrown, see
		// https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
		throw error;
	}

	console.log('AWS Secret Response:', response);

	return response.SecretString;
};
