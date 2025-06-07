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
			label: englishToKhmerWords[value]?.khmer.text || idx.toString(),
			value: englishToKhmerWords[value]?.english.text || value,
		};
	});
	const khmerlishLabels = wordsArr.map((value, idx) => {
		return {
			label: englishToKhmerWords[value]?.khmerlish.text || idx.toString(),
			value: englishToKhmerWords[value]?.english.text || value,
		};
	});
	const englishLabels = wordsArr.map((value) => {
		return {
			label: englishToKhmerWords[value]?.english.text || value,
			value: englishToKhmerWords[value]?.english.text || value,
		};
	});
	return { khmerLabels, khmerlishLabels, englishLabels };
};
