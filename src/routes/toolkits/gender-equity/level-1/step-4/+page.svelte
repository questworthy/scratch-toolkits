<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';
	import video from '$lib/assets/videos/sujatha.mp4';
	import caption from '$lib/assets/videos/sujatha.vtt';

	let online = false;
	onMount(() => {
		online = window.navigator.onLine;
		$appState.dialogue = 'Do you know someone around you who has broken a gender stereotype?';
		$appState.title = '✨ Step 4 : Get Inspired !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-1/quiz';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-1/step-5';
	});
</script>

<div class="max-w-screen-sm mx-auto prose-xl">
	{#if online}
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/--LI0ZRsglg?si=q7IEMfL6e--_pr2D"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	{:else}
		<video autoplay class="rounded-xl" id="video" controls preload="metadata">
			<source src={video} type="video/mp4" />
			<track label="English" kind="captions" srclang="en" src={caption} default />
		</video>
	{/if}
	<p>
		Here is a video about a woman who challenged some stereotypes and rose above them. Meet Ms.
		Sujata Ramdorai in the video ‘Sujata Ramdorai and her story with numbers!’ 🚀
	</p>
</div>
