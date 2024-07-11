import { writable } from 'svelte/store';

export const appState = writable({
	// side panel
	expression: 'blank', // smile, surprised etc.
	dialogue: 'Insert dialogue here ~ 25-30 words. This text will reanimate to reflect changes.',
	resource: 'Insert resource description here. This should ideally be a one-liner.',
	links: [
		{
			label: '🧮 What is Scratch?',
			url: 'https://www.youtube.com/watch?v=jXUZaf5D12A'
		},
		{ label: '🪄 Made with Scratch?', url: 'https://www.youtube.com/watch?v=98awWpkx9UM' }
	],
	title: 'Insert Page Title Here.',
	leftButtonLabel: 'Back',
	leftButtonLink: '',
	rightButtonLabel: 'Next',
	rightButtonLink: '',
	lastLevel: 1
});
