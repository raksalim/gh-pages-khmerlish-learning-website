import { s3BucketBaseUrl } from '@/data/const';

function cleanUrl(word: string): string {
	word = word.replace('/', ':');
	return encodeURIComponent(word).replace(/%20/g, '+');
}

const playSequentially = async (words: string[]) => {
	const s3WordBaseUrl: string = `${s3BucketBaseUrl}/sound/khmer/words`;
	for (const word of words) {
		const audioEndpoint: string = cleanUrl(`${word}.wav`);
		const audioUrl: string = `${s3WordBaseUrl}/${audioEndpoint}`;
		const audio: HTMLAudioElement = new Audio(audioUrl);
		await new Promise<void>((resolve) => {
			audio.onended = () => resolve();
			audio.onerror = () => resolve();
			audio.play();
		});
	}
};
export const handlePlay = (englishWord: string[]): void => {
	playSequentially(englishWord);
	return;
};
