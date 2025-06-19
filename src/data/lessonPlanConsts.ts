import { DifficultySliderOption } from '@/components/DifficultyLevel';

export type languageOptions = 'english' | 'khmer' | 'khmerlish';
export type LevelSetting = {
	pickerLanguage: languageOptions;
	buttonLanguage: languageOptions;
};

export const levelsSettings: Record<string, LevelSetting> = {
	Intro: {
		pickerLanguage: 'english',
		buttonLanguage: 'khmer',
	},
	Tutorial: {
		pickerLanguage: 'english',
		buttonLanguage: 'khmer',
	},
	['Common Phrases']: {
		pickerLanguage: 'english',
		buttonLanguage: 'khmer',
	},
	Subject: {
		pickerLanguage: 'english',
		buttonLanguage: 'khmerlish',
	},
	Verbs: {
		pickerLanguage: 'english',
		buttonLanguage: 'khmerlish',
	},
	Objects: {
		pickerLanguage: 'english',
		buttonLanguage: 'khmerlish',
	},
	Sentence: {
		pickerLanguage: 'english',
		buttonLanguage: 'khmerlish',
	},
	Khmerlish: {
		pickerLanguage: 'khmer',
		buttonLanguage: 'english',
	},
	Khmer: {
		pickerLanguage: 'khmer',
		buttonLanguage: 'khmer',
	},
	Practice: {
		pickerLanguage: 'khmer',
		buttonLanguage: 'khmer',
	},
	['Extra Practice']: {
		pickerLanguage: 'khmer',
		buttonLanguage: 'khmer',
	},
};

export const speakingPracticeDifficultyScale: DifficultySliderOption[] = Object.keys(
	levelsSettings
).map((label, value) => ({
	value,
	label,
}));
