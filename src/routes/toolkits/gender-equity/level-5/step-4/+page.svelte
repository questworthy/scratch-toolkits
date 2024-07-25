<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	import equalityVideo from '$lib/assets/videos/equality.mp4';
	import modelsVideo from '$lib/assets/videos/models.mp4';
	import modelsCaption from '$lib/assets/videos/models.vtt';
	import Paper from '$lib/components/Paper.svelte';

	let online = false;
	onMount(() => {
		online = window.navigator.onLine;
		$appState.pattern = '/patterns/step-4.svg';
		$appState.dialogue = 'Video time! 🍿';
		$appState.title = '✨ Step 4 : Get Inspired !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-5/quiz';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-5/step-5';
	});
</script>

<Paper title="Gender Inequity">
	<p>The video here wraps up all the concepts that you have learnt so far.</p>

	{#if online}
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/bcumR1bDgMw?si=VHHkWzBo43nRGu0b"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	{:else}
		<video class="rounded-xl" id="video" controls preload="metadata">
			<source src={equalityVideo} type="video/mp4" />
		</video>
	{/if}

	<p>
		Gender inequity shows itself at home, at work, in our personal lives. Remember gender biases and
		inequity exist for people of all genders. Here is a video of a woman role modal who broke these
		stereotypes and went on to become the CEO of a financial firm in India.
	</p>

	{#if online}
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/7yvM8tKRUIE?si=tLbJNQyroA5Gvjz_"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	{:else}
		<video class="rounded-xl" id="video" controls preload="metadata">
			<source src={modelsVideo} type="video/mp4" />
			<track label="English" kind="captions" srclang="en" src={modelsCaption} default />
		</video>
	{/if}
</Paper>
