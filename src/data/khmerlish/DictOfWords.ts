import { s3BucketBaseUrl } from '../const';

export type Word = {
	khmer: string;
	khmerlish: string;
	english: string;
};

const s3WordSoundBaseUrl = `${s3BucketBaseUrl}/sounds/words`;
// const khmerS3WordSoundBaseUrl = `${s3WordSoundBaseUrl}/khmer`;
// const englishS3WordSoundBaseUrl = `${s3WordSoundBaseUrl}/english`;

export const commonSayings: string[] = [
	'hello (formal)',
	'hello (informal)',
	'thank you',
	'yes (m)',
	'yes (f)',
	'no',
	'sorry',
	'how are you?',
	'goodbye',
];

export const subjectWords: string[] = [
	'I',
	'you',
	'her',
	'him',
	'they',
	'us/we',
];
export const verbsWords: string[] = [
	'',
	'can',
	'want',
	'try',
	'like',
	'need',
	'love',
	// 'plan',
	// 'hope',
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
	'buy',
	'read',
	'learn',
	'eat',
	'find',
	'go',
	'understand',
	'drink',
	// 'run',
	// 'swim',
	// 'dance',
	// 'play',
	// 'work',
	// 'study',
	// 'sleep',
	// 'write',
];
export const nounsWords: string[] = [
	'',
	'book',
	'khmer',
	'rice',
	'home',
	'hotel',
	'food',
	'school',
	'water',
	'phone',
	'medicine',
	'bathroom',
	// 'car',
	// 'house',
	// 'cat',
	// 'dog',
	// 'computer',
	// 'city',
	// 'drink',
	// 'people',
	// 'thing',
];

export const englishToKhmerDict: Record<string, Word> = {
	bad: {
		khmer: 'អាក្រក់',
		khmerlish: 'akrok',
		english: 'bad',
	},
	bathroom: {
		khmer: 'បន្ទប់ទឹក',
		khmerlish: 'bantup tuk',
		english: 'bathroom',
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
	buy: {
		khmer: 'ទិញ',
		khmerlish: 'ting',
		english: 'buy',
	},
	can: {
		khmer: 'អាច',
		khmerlish: 'ach',
		english: 'can',
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
		khmerlish: 'phok',
		english: 'drink',
	},
	eat: {
		khmer: 'ញុំា',
		khmerlish: 'nham',
		english: 'eat',
	},
	fast: {
		khmer: 'លឿន',
		khmerlish: 'luen',
		english: 'fast',
	},
	find: {
		khmer: 'រក',
		khmerlish: 'rok',
		english: 'find',
	},
	food: {
		khmer: 'ម្ហូប',
		khmerlish: 'mhoop',
		english: 'food',
	},
	go: {
		khmer: 'ទៅ',
		khmerlish: 'tov',
		english: 'go',
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
	home: {
		khmer: 'ផ្ទះ',
		khmerlish: 'phteah',
		english: 'home',
	},
	hope: {
		khmer: 'សង្ឃឹម',
		khmerlish: 'sangkhim',
		english: 'hope',
	},
	hotel: {
		khmer: 'អូតែល',
		khmerlish: 'otel',
		english: 'hotel',
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
	khmer: {
		khmer: 'ខ្មែរ',
		khmerlish: 'khmer',
		english: 'khmer',
	},
	jump: {
		khmer: 'លោត',
		khmerlish: 'lot',
		english: 'jump',
	},
	learn: {
		khmer: 'រៀន',
		khmerlish: 'rean',
		english: 'learn',
	},
	like: {
		khmer: 'ចូលចិត្ត',
		khmerlish: 'cholchet',
		english: 'like',
	},
	love: {
		khmer: 'ស្រឡាញ់',
		khmerlish: 'sralanh',
		english: 'love',
	},
	medicine: {
		khmer: 'ថ្នាំ',
		khmerlish: 'thnam',
		english: 'medicine',
	},
	need: {
		khmer: 'ត្រូវការ',
		khmerlish: 'trovkar',
		english: 'need',
	},
	phone: {
		khmer: 'ទូរស័ព្ទ',
		khmerlish: 'turasap',
		english: 'phone',
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
	'us/we': {
		khmer: 'យើង',
		khmerlish: 'yung',
		english: 'us/we',
	},
	understand: {
		khmer: 'យល់',
		khmerlish: 'yol',
		english: 'understand',
	},
	want: {
		khmer: 'ចង់',
		khmerlish: 'chang',
		english: 'want',
	},
	water: {
		khmer: 'ទឹក',
		khmerlish: 'tuk',
		english: 'water',
	},
	work: {
		khmer: 'ធ្វើការ',
		khmerlish: 'tver kar',
		english: 'work',
	},
	write: {
		khmer: 'សរសេរ',
		khmerlish: 'sorsae',
		english: 'write',
	},
	you: {
		khmer: 'អ្នក',
		khmerlish: 'anak',
		english: 'you',
	},
};

export const englishPhraseToKhmer: Record<string, Word> = {
	goodbye: {
		khmer: 'លាហើយ',
		khmerlish: 'leahaey',
		english: 'goodbye',
	},
	'hello (formal)': {
		khmer: 'សួស្តី',
		khmerlish: 'suosdey',
		english: 'hello (formal)',
	},
	'hello (informal)': {
		khmer: 'ជំរាបសួរ',
		khmerlish: 'chomreabsuor',
		english: 'hello (informal)',
	},
	'how are you?': {
		khmer: 'សុខសប្បាយទេ?',
		khmerlish: 'sok sabbay te?',
		english: 'how are you?',
	},
	'khmer language': {
		khmer: 'ភាសាខ្មែរ',
		khmerlish: 'pheasa khmer',
		english: 'khmer language',
	},
	no: {
		khmer: 'ទេ',
		khmerlish: 'te',
		english: 'no',
	},
	sorry: {
		khmer: 'សុំទោស',
		khmerlish: 'somtoh',
		english: 'sorry',
	},
	'thank you': {
		khmer: 'អរគុណ',
		khmerlish: 'arkun',
		english: 'thank you',
	},
	'yes (f)': {
		khmer: 'ចាស',
		khmerlish: 'cha',
		english: 'yes (f)',
	},
	'yes (m)': {
		khmer: 'បាទ',
		khmerlish: 'bat',
		english: 'yes (m)',
	},
};

export const englishToKhmerWords: Record<string, Word> = {
	...englishToKhmerDict,
	...englishPhraseToKhmer,
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
