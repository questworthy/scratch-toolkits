import { writable } from 'svelte/store';

export const appState = writable({
	// side panel
	expression: 'blank', // smile, surprised etc.
	dialogue: 'Insert dialogue here ~ 25-30 words. This text will reanimate to reflect changes.',
	resource:
		'Are you new to Scratch? Click the button below & explore the exciting world of creative coding!',
	links: [
		{ label: '🪄 Made with Scratch?', url: 'https://www.youtube.com/watch?v=98awWpkx9UM' },
		{
			label: '🧮 Learn Scratch Basics',
			url: 'http://172.105.48.200:8001/home.html'
		}
	],
	title: 'Insert Page Title Here.',
	leftButtonLabel: 'Back',
	leftButtonLink: '',
	rightButtonLabel: 'Next',
	rightButtonLink: '',
	lastLevel: 1
});
