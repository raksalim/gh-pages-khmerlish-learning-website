import { s3BucketBaseUrl } from '../const';

const s3WordSoundBaseUrl = `${s3BucketBaseUrl}/`;
type WordValues = {
	audio: string;
	text: string;
};
export type Word = {
	khmer: WordValues;
	khmerlish: WordValues;
	english: WordValues;
};

export const englishToKhmerWords: Record<string, Word> = {
	i: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/I.mp3',
			text: 'ខ្ញុំ',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/I.mp3',
			text: 'khnhom',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/I.mp3',
			text: 'I',
		},
	},
	you: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/you.mp3',
			text: 'អ្នក',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/you.mp3',
			text: 'anak',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/you.mp3',
			text: 'you',
		},
	},
	her: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/her.mp3',
			text: 'នាង',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/her.mp3',
			text: 'neang',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/her.mp3',
			text: 'her',
		},
	},
};

