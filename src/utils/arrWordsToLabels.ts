import { WheelPickerOption } from '@/components/wheel-picker';
import { englishToKhmerWords } from '@/data/khmerlish/DictOfWords';

export type LabelsDict = {
	khmerLabels: WheelPickerOption[];
	khmerlishLabels: WheelPickerOption[];
	englishLabels: WheelPickerOption[];
};

export const arrWordsToLabels = (wordsArr: string[]): LabelsDict => {
	const khmerLabels = wordsArr.map((value, idx) => {
		return {
			label: englishToKhmerWords[value]?.khmer || value,
			value: englishToKhmerWords[value]?.english || value,
		};
	});
	const khmerlishLabels = wordsArr.map((value, idx) => {
		return {
			label: englishToKhmerWords[value]?.khmerlish || value,
			value: englishToKhmerWords[value]?.english || value,
		};
	});
	const englishLabels = wordsArr.map((value) => {
		return {
			label: englishToKhmerWords[value]?.english || value,
			value: englishToKhmerWords[value]?.english || value,
		};
	});
	return { khmerLabels, khmerlishLabels, englishLabels };
};
