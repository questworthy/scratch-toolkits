import { writable } from 'svelte/store';

export const appState = writable({
	title: 'Insert Page Title Here.',
	smile: false,
	dialogue:
		'Insert dialogue here. This should ideally be 25-30 words. As the dialogues change this text will reanimate to reflect changes.',
	resources: 'Insert resource description here. This should ideally be a one-liner.',
	links: [
		{
			label: '🧮 What is Scratch?',
			url: 'https://www.youtube.com/watch?v=jXUZaf5D12A'
		},
		{ label: '🪄 Made with Scratch?', url: 'https://www.youtube.com/watch?v=98awWpkx9UM' }
	],
	back: '',
	next: '',
	leftButtonLabel: 'Back',
	rightButtonLabel: 'Next'
});
