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

export const subjectWords: string[] = [
	'i',
	'you',
	'her',
	'him',
	'they',
	'them',
	'us',
];
export const verbsWords: string[] = [
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
	'read',
	'run',
	'jump',
	'swim',
	'dance',
	'play',
	'work',
	'study',
	'sleep',
];
export const nounsWords: string[] = [
	'book',
	'car',
	'house',
	'cat',
	'dog',
	'computer',
	'school',
	'city',
];

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
	him: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/him.mp3',
			text: 'គាត់',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/him.mp3',
			text: 'koat',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/him.mp3',
			text: 'him',
		},
	},
	they: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/they.mp3',
			text: 'ពួកគេ',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/they.mp3',
			text: 'puok ke',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/they.mp3',
			text: 'they',
		},
	},
	them: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/them.mp3',
			text: 'ពួកគេ',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/them.mp3',
			text: 'puok ke',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/them.mp3',
			text: 'them',
		},
	},
	us: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/us.mp3',
			text: 'យើង',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/us.mp3',
			text: 'yeung',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/us.mp3',
			text: 'us',
		},
	},
	want: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/want.mp3',
			text: 'ចង់',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/want.mp3',
			text: 'chang',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/want.mp3',
			text: 'want',
		},
	},
	like: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/like.mp3',
			text: 'ចូលចិត្ត',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/like.mp3',
			text: 'cholchet',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/like.mp3',
			text: 'like',
		},
	},
	need: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/need.mp3',
			text: 'ត្រូវការ',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/need.mp3',
			text: 'trovkar',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/need.mp3',
			text: 'need',
		},
	},
	try: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/try.mp3',
			text: 'ព្យាយាម',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/try.mp3',
			text: 'pyayiem',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/try.mp3',
			text: 'try',
		},
	},
	plan: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/plan.mp3',
			text: 'ផែនការ',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/plan.mp3',
			text: 'phaenkar',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/plan.mp3',
			text: 'plan',
		},
	},
	hope: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/hope.mp3',
			text: 'សង្ឃឹម',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/hope.mp3',
			text: 'sangkhim',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/hope.mp3',
			text: 'hope',
		},
	},
	big: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/big.mp3',
			text: 'ធំ',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/big.mp3',
			text: 'thom',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/big.mp3',
			text: 'big',
		},
	},
	small: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/small.mp3',
			text: 'តូច',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/small.mp3',
			text: 'touch',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/small.mp3',
			text: 'small',
		},
	},
	good: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/good.mp3',
			text: 'ល្អ',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/good.mp3',
			text: 'loar',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/good.mp3',
			text: 'good',
		},
	},
	bad: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/bad.mp3',
			text: 'អាក្រក់',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/bad.mp3',
			text: 'akrok',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/bad.mp3',
			text: 'bad',
		},
	},
	happy: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/happy.mp3',
			text: 'សប្បាយ',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/happy.mp3',
			text: 'sabbay',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/happy.mp3',
			text: 'happy',
		},
	},
	sad: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/sad.mp3',
			text: 'ពិបាកចិត្ត',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/sad.mp3',
			text: 'pibakchet',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/sad.mp3',
			text: 'sad',
		},
	},
	fast: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/fast.mp3',
			text: 'លឿន',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/fast.mp3',
			text: 'luen',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/fast.mp3',
			text: 'fast',
		},
	},
	slow: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/slow.mp3',
			text: 'យឺត',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/slow.mp3',
			text: 'yuet',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/slow.mp3',
			text: 'slow',
		},
	},
	read: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/read.mp3',
			text: 'អាន',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/read.mp3',
			text: 'an',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/read.mp3',
			text: 'read',
		},
	},
	run: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/run.mp3',
			text: 'រត់',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/run.mp3',
			text: 'rut',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/run.mp3',
			text: 'run',
		},
	},
	jump: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/jump.mp3',
			text: 'លោត',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/jump.mp3',
			text: 'lot',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/jump.mp3',
			text: 'jump',
		},
	},
	swim: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/swim.mp3',
			text: 'ហែលទឹក',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/swim.mp3',
			text: 'hael tirk',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/swim.mp3',
			text: 'swim',
		},
	},
	dance: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/dance.mp3',
			text: 'រាំ',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/dance.mp3',
			text: 'rom',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/dance.mp3',
			text: 'dance',
		},
	},
	play: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/play.mp3',
			text: 'លេង',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/play.mp3',
			text: 'leng',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/play.mp3',
			text: 'play',
		},
	},
	work: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/work.mp3',
			text: 'ធ្វើការ',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/work.mp3',
			text: 'tver kar',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/work.mp3',
			text: 'work',
		},
	},
	study: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/study.mp3',
			text: 'សិក្សា',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/study.mp3',
			text: 'seksaa',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/study.mp3',
			text: 'study',
		},
	},
	sleep: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/sleep.mp3',
			text: 'ដេក',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/sleep.mp3',
			text: 'dek',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/sleep.mp3',
			text: 'sleep',
		},
	},
	book: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/book.mp3',
			text: 'សៀវភៅ',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/book.mp3',
			text: 'siephov',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/book.mp3',
			text: 'book',
		},
	},
	car: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/car.mp3',
			text: 'ឡាន',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/car.mp3',
			text: 'lan',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/car.mp3',
			text: 'car',
		},
	},
	house: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/house.mp3',
			text: 'ផ្ទះ',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/house.mp3',
			text: 'phteah',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/house.mp3',
			text: 'house',
		},
	},
	cat: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/cat.mp3',
			text: 'ឆ្មា',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/cat.mp3',
			text: 'chhma',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/cat.mp3',
			text: 'cat',
		},
	},
	dog: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/dog.mp3',
			text: 'ឆ្កែ',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/dog.mp3',
			text: 'chhkae',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/dog.mp3',
			text: 'dog',
		},
	},
	computer: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/computer.mp3',
			text: 'កុំព្យូទ័រ',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/computer.mp3',
			text: 'kompyuter',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/computer.mp3',
			text: 'computer',
		},
	},
	school: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/school.mp3',
			text: 'សាលា',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/school.mp3',
			text: 'sala',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/school.mp3',
			text: 'school',
		},
	},
	city: {
		khmer: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/city.mp3',
			text: 'ទីក្រុង',
		},
		khmerlish: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/city.mp3',
			text: 'tikrong',
		},
		english: {
			audio:
				'https://raw.githubusercontent.com/khmerlish/khmerlish/main/audio/city.mp3',
			text: 'city',
		},
	},
};
