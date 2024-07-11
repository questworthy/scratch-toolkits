<script>
	import '../app.css';
	import '@fontsource/comic-neue/300.css'; // light
	import '@fontsource/comic-neue/400.css'; // regular
	import '@fontsource/comic-neue/700.css'; // bold

	import Dot from '$lib/components/Dot.svelte';

	import { onMount } from 'svelte';

	let width = 0;
	let height = 0;
	onMount(() => {
		width = screen.width;
		height = screen.height;
	});
</script>

{#if width >= 1024 && width > height}
	<Dot />
{/if}
<slot />
