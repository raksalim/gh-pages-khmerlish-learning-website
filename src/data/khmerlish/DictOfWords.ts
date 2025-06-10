import { s3BucketBaseUrl } from '../const';

export type Word = {
	khmer: string;
	khmerlish: string;
	english: string;
};

const s3WordSoundBaseUrl = `${s3BucketBaseUrl}/sounds/words`;
// const khmerS3WordSoundBaseUrl = `${s3WordSoundBaseUrl}/khmer`;
// const englishS3WordSoundBaseUrl = `${s3WordSoundBaseUrl}/english`;

export const subjectWords: string[] = [
	'I',
	'you',
	'her',
	'him',
	'they',
	'them',
	'us',
];
export const verbsWords: string[] = [
	'',
	'want',
	'like',
	'need',
	'try',
	'plan',
	'hope',
	// "prefer",
	// "decide",
	// "expect",
	// "wish",
	// "learn",
	// "promise",
	// "agree",
	// "refuse",
	// "manage",
	// "fail",
	// "offer",
	// "seem",
	// "appear",
	// "tend",
];
export const adjectivesWords: string[] = [
	'',
	'big',
	'small',
	'good',
	'bad',
	'happy',
	'sad',
	'fast',
	'slow',
];
export const infiniteVerbsWords: string[] = [
	'',
	'read',
	'eat',
	'run',
	// 'jump',
	'swim',
	'dance',
	'play',
	'work',
	'study',
	'sleep',
	'drink',
	'write',
	'find',
];
export const nounsWords: string[] = [
	'',
	'rice',
	'book',
	'car',
	'house',
	'cat',
	'dog',
	'computer',
	'school',
	'city',
	'drink',
	'food',
	'water',
	'people',
	'thing',
];

export const englishToKhmerWords: Record<string, Word> = {
	bad: {
		khmer: 'អាក្រក់',
		khmerlish: 'akrok',
		english: 'bad',
	},
	big: {
		khmer: 'ធំ',
		khmerlish: 'thom',
		english: 'big',
	},
	book: {
		khmer: 'សៀវភៅ',
		khmerlish: 'siephov',
		english: 'book',
	},
	car: {
		khmer: 'ឡាន',
		khmerlish: 'lan',
		english: 'car',
	},
	cat: {
		khmer: 'ឆ្មា',
		khmerlish: 'chhma',
		english: 'cat',
	},
	city: {
		khmer: 'ទីក្រុង',
		khmerlish: 'tikrong',
		english: 'city',
	},
	computer: {
		khmer: 'កុំព្យូទ័រ',
		khmerlish: 'kompyuter',
		english: 'computer',
	},
	dance: {
		khmer: 'រាំ',
		khmerlish: 'rom',
		english: 'dance',
	},
	dog: {
		khmer: 'ឆ្កែ',
		khmerlish: 'chhkae',
		english: 'dog',
	},
	drink: {
		khmer: 'ផឹក',
		khmerlish: 'phak',
		english: 'drink',
	},
	eat: {
		khmer: 'បរិច្ឆេទ',
		khmerlish: 'boreichhet',
		english: 'eat',
	},
	fast: {
		khmer: 'លឿន',
		khmerlish: 'luen',
		english: 'fast',
	},
	find: {
		khmer: 'រកឃើញ',
		khmerlish: 'rok khernh',
		english: 'find',
	},
	good: {
		khmer: 'ល្អ',
		khmerlish: 'loar',
		english: 'good',
	},
	happy: {
		khmer: 'សប្បាយ',
		khmerlish: 'sabbay',
		english: 'happy',
	},
	her: {
		khmer: 'នាង',
		khmerlish: 'neang',
		english: 'her',
	},
	him: {
		khmer: 'គាត់',
		khmerlish: 'koat',
		english: 'him',
	},
	hope: {
		khmer: 'សង្ឃឹម',
		khmerlish: 'sangkhim',
		english: 'hope',
	},
	house: {
		khmer: 'ផ្ទះ',
		khmerlish: 'phteah',
		english: 'house',
	},
	I: {
		khmer: 'ខ្ញុំ',
		khmerlish: 'khnhom',
		english: 'I',
	},
	jump: {
		khmer: 'លោត',
		khmerlish: 'lot luh',
		english: 'jump on',
	},
	like: {
		khmer: 'ចូលចិត្ត',
		khmerlish: 'cholchet',
		english: 'like',
	},
	need: {
		khmer: 'ត្រូវការ',
		khmerlish: 'trovkar',
		english: 'need',
	},
	plan: {
		khmer: 'ផែនការ',
		khmerlish: 'phaenkar',
		english: 'plan',
	},
	play: {
		khmer: 'លេង',
		khmerlish: 'leng',
		english: 'play',
	},
	read: {
		khmer: 'អាន',
		khmerlish: 'an',
		english: 'read',
	},
	rice: {
		khmer: 'បាយ',
		khmerlish: 'bay',
		english: 'rice',
	},
	run: {
		khmer: 'រត់',
		khmerlish: 'rut',
		english: 'run',
	},
	sad: {
		khmer: 'ពិបាកចិត្ត',
		khmerlish: 'pibakchet',
		english: 'sad',
	},
	school: {
		khmer: 'សាលា',
		khmerlish: 'sala',
		english: 'school',
	},
	sleep: {
		khmer: 'ដេក',
		khmerlish: 'dek',
		english: 'sleep',
	},
	small: {
		khmer: 'តូច',
		khmerlish: 'touch',
		english: 'small',
	},
	slow: {
		khmer: 'យឺត',
		khmerlish: 'yuet',
		english: 'slow',
	},
	study: {
		khmer: 'សិក្សា',
		khmerlish: 'seksaa',
		english: 'study',
	},
	swim: {
		khmer: 'ហែលទឹក',
		khmerlish: 'hael tirk',
		english: 'swim',
	},
	them: {
		khmer: 'ពួកគេ',
		khmerlish: 'puok ke',
		english: 'them',
	},
	they: {
		khmer: 'ពួកគេ',
		khmerlish: 'puok ke',
		english: 'they',
	},
	try: {
		khmer: 'ព្យាយាម',
		khmerlish: 'pyayiem',
		english: 'try',
	},
	us: {
		khmer: 'យើង',
		khmerlish: 'yeung',
		english: 'us',
	},
	want: {
		khmer: 'ចង់',
		khmerlish: 'chang',
		english: 'want',
	},
	work: {
		khmer: 'ធ្វើការ',
		khmerlish: 'tver kar',
		english: 'work',
	},
	write: {
		khmer: '',
		khmerlish: '',
		english: 'write',
	},
	you: {
		khmer: 'អ្នក',
		khmerlish: 'anak',
		english: 'you',
	},
};

export const englishToKhmerWordsWithSound: Record<
	string,
	Word & { soundUrl: string }
> = Object.fromEntries(
	Object.entries(englishToKhmerWords).map(([key, value]) => [
		key,
		{
			...value,
			soundUrl: `${s3WordSoundBaseUrl}${key}.mp3`,
		},
	])
);
