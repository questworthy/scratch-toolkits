<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	import parentsVideo from '$lib/assets/videos/parents.mp4';
	import parentsCaption from '$lib/assets/videos/parents.vtt';

	import scientistVideo from '$lib/assets/videos/scientist.mp4';
	import scientistCaption from '$lib/assets/videos/scientist.vtt';

	let online = false;
	onMount(() => {
		online = window.navigator.onLine;
		$appState.dialogue = 'Hmmm.. This is quite inspirational! 🫡';
		$appState.title = '✨ Step 4 : Get Inspired !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-3/quiz';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-3/step-5';
	});
</script>

<div class="max-w-screen-sm mx-auto prose-xl">
	<p>
		Parents play a huge role in conditioning the children into or out of the gender roles. Watch
		this video to learn how!
	</p>

	{#if online}
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/swSy6pdAS-0?si=fvr-jt24BnIEyJpx"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	{:else}
		<video class="rounded-xl" id="video" controls preload="metadata">
			<source src={parentsVideo} type="video/mp4" />
			<track label="English" kind="captions" srclang="en" src={parentsCaption} default />
		</video>
	{/if}

	<p>
		In the world around, many jobs are seen as suitable for only men and only women. Always remember
		gender roles should not be attached to any job. We are all capable of doing anything that we set
		our mind at! Watch this video of Dr. Patu K Zeliang, an agricultural scientist, to learn about
		her journey in the field of science.
	</p>

	{#if online}
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/1qS8kmxT2qk?si=_zy2_-cJzxhOWlWV"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	{:else}
		<video class="rounded-xl" id="video" controls preload="metadata">
			<source src={scientistVideo} type="video/mp4" />
			<track label="English" kind="captions" srclang="en" src={scientistCaption} default />
		</video>
	{/if}
</div>
