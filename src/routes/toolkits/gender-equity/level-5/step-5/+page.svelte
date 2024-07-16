<script>
	import { onMount } from 'svelte';
	import { appState } from '$lib/stores';
	import { Confetti } from 'svelte-confetti';
	import Button from '$lib/components/Button.svelte';

	let online = false;
	let hidden = false;

	onMount(() => {
		online = window.navigator.onLine;
		setTimeout(() => {
			hidden = true;
		}, 1000);

		$appState.expression = 'smile';
		$appState.dialogue = '🎉 Congrats ! You have completed the course !';
		$appState.title = '🎨 Step 5 : Build your own Scratch project!';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-5/step-4';
		$appState.rightButtonLink = '';
		$appState.rightButtonLink = '';
	});
</script>

<div class="mx-auto max-w-screen-md prose m-4 p-4 prose-xl">
	<p>
		Here’s your chance to convert the knowledge of this toolkit into wisdom! 💪 Can you identify one
		challenge around you pertaining to gender equity? Think of ways to represent it using Scratch
		and build your own project around it.
	</p>

	<p>Share it with your friends and in your community. 💝</p>

	<Button label="Create your own scratch project" />
	<Button base={false} label="Remix the project earlier used in this level" />
</div>

<div
	style="
 position: fixed;
 top: -50px;
 left: 0;
 height: 100vh;
 width: 100vw;
 display: flex;
 justify-content: center;
 overflow: hidden;
 pointer-events: none;"
>
	<Confetti
		x={[-5, 5]}
		y={[0, 0.1]}
		delay={[500, 2000]}
		infinite
		duration={5000}
		amount={200}
		fallDistance="100vh"
	/>
</div>
