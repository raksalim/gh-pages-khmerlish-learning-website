import { prepareAudio } from './audioPlayback';

// Leave room in the 24-clip cache for tapped clips and sentence playback.
const MAX_VISIBLE_CLIPS = 20;

export function prepareVisibleAudio(container: HTMLElement): () => void {
	if (typeof IntersectionObserver === 'undefined') return () => {};
	const visible = new Set<HTMLElement>();
	let timer: ReturnType<typeof setTimeout> | undefined;
	let previous = new Set<string>();

	const observer = new IntersectionObserver(entries => {
		for (const entry of entries) {
			const button = entry.target as HTMLElement;
			if (entry.isIntersecting) visible.add(button);
			else visible.delete(button);
		}
		clearTimeout(timer);
		// Prioritize the middle of the viewport when more than 20 keys fit.
		const urls = [...visible]
			.sort((a, b) => {
				const distance = (element: HTMLElement) => {
					const rect = element.getBoundingClientRect();
					return Math.abs((rect.top + rect.bottom) / 2 - window.innerHeight / 2);
				};
				return distance(a) - distance(b);
			})
			.filter(button => !button.matches(':disabled'))
			.map(button => button.dataset.audioUrl)
			.filter((url): url is string => Boolean(url))
			.slice(0, MAX_VISIBLE_CLIPS);
		const selected = new Set(urls);
		previous = new Set([...previous].filter(url => selected.has(url)));
		const pending = urls.filter(url => !previous.has(url));
		const prepareBatch = () => {
			const batch = pending.splice(0, 2);
			prepareAudio(batch);
			batch.forEach(url => previous.add(url));
			if (pending.length) timer = setTimeout(prepareBatch, 150);
		};
		// Scrolling must settle briefly before starting more requests.
		timer = setTimeout(prepareBatch, 150);
	}, { threshold: 0.1 });

	container.querySelectorAll<HTMLElement>('[data-audio-url]').forEach(button => observer.observe(button));
	return () => {
		observer.disconnect();
		clearTimeout(timer);
	};
}
