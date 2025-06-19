import { WheelPickerOption } from '@/components/SpeakingPractice/wheel-picker';
import { englishToKhmerWords } from '@/data/khmerlish/DictOfWords';

export type LabelsDict = {
	khmerLabels: WheelPickerOption[];
	khmerlishLabels: WheelPickerOption[];
	englishLabels: WheelPickerOption[];
};

export const arrWordsToLabels = (
	wordsArr: string[],
	isSorted?: boolean
): LabelsDict => {
	const khmerLabels = wordsArr.map((value) => {
		return {
			label: englishToKhmerWords[value]?.khmer || value,
			value: englishToKhmerWords[value]?.english || value,
		};
	});
	const khmerlishLabels = wordsArr.map((value) => {
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
	if (isSorted) {
		khmerLabels.sort((a, b) => a.value.localeCompare(b.value));
		khmerlishLabels.sort((a, b) => a.value.localeCompare(b.value));
		englishLabels.sort((a, b) => a.value.localeCompare(b.value));
	}
	return { khmerLabels, khmerlishLabels, englishLabels };
};
