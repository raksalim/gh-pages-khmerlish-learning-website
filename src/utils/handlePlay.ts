import { s3BucketBaseUrl } from '@/data/const';
import { playAudioSequence, prepareAudio } from './audioPlayback';

function cleanUrl(word: string): string {
	word = word.replace('/', ':');
	return encodeURIComponent(word).replace(/%20/g, '+');
}

const wordUrls = (words: string[]) => words
	.filter(word => word.trim().length > 0)
	.map(word => `${s3BucketBaseUrl}/sound/khmer/words/${cleanUrl(`${word}.wav`)}`);

export const prepareWords = (words: string[]): void => {
	prepareAudio(wordUrls(words));
};

export const handlePlay = (englishWord: string[]): void => {
	void playAudioSequence(wordUrls(englishWord));
};
