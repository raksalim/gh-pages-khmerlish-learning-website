export const khmerConsonantsAll: string[] = [
	'ក',
	'ខ',
	'គ',
	'ឃ',
	'ង',
	'ច',
	'ឆ',
	'ជ',
	'ឈ',
	'ញ',
	'ដ',
	'ឋ',
	'ឌ',
	'ឍ',
	'ណ',
	'ត',
	'ថ',
	'ទ',
	'ធ',
	'ន',
	'ប',
	'ផ',
	'ព',
	'ភ',
	'ម',
	'យ',
	'រ',
	'ល',
	'វ',
	'ស',
	'ហ',
	'ឡ',
	'អ',
];

export const khmerConsonantsAh: string[] = [
	'ក',
	'ខ',
	'ច',
	'ឆ',
	'ដ',
	'ឋ',
	'ណ',
	'ត',
	'ថ',
	'ប',
	'ផ',
	'ស',
	'ហ',
	'ឡ',
	'អ',
];

export const khmerConsonantsForRatTeeth: string[] = [
	'ង',
	'ញ',
	'ប',
	'ម',
	'យ',
	'រ',
	'វ',
];

export const khmerConsonantsForHair: string[] = ['ប', 'ស', 'ហ', 'អ'];

type KhmerConsonantIndexMapping = {
	[key: number]: number;
};

export const khmerConsonantsWithRatTeethIndexMapping: KhmerConsonantIndexMapping = {
	4: 1,
	9: 2,
	20: 3,
	24: 4,
	25: 5,
	26: 6,
	28: 7,
};

export const khmerConsonantsWithHairIndexMapping: KhmerConsonantIndexMapping = {
	20: 1,
	29: 2,
	30: 3,
	32: 4,
};