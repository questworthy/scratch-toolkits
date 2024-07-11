<script>
	import Lily from '$lib/components/Lily.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { onMount } from 'svelte';

	let width = 0;
	let height = 0;
	onMount(() => {
		width = screen.width;
		height = screen.height;
	});

	import { appState } from '$lib/stores';

	$: leftButtonLabel = $appState.links;
	$: rightButtonLabel = $appState.links;
</script>

<div class="w-screen h-screen flex">
	{#if width >= 1024 && width > height}
		<div class="w-64 border-r shadow flex flex-col p-2">
			<div class="m-2">
				<Lily smile={$appState.smile} />
			</div>
			<p class="m-2 flex-grow border-b">
				{$appState.dialogue}
			</p>
			<div class="m-2 border-b">
				<p>{$appState.resources}</p>
				<ul class="my-4 list-disc list-inside">
					{#each $appState.links as link}
						<li><a href={link.url}>{link.label}</a></li>
					{/each}
				</ul>
			</div>
			<footer class="m-2">
				<p>
					Created with ❤️ by <a
						class="underline underline-offset-4 hover:no-underline text-sky-600"
						href="www.questalliance.net">Quest Alliance</a
					>.
				</p>
			</footer>
		</div>
	{/if}
	<div class="flex-grow flex flex-col">
		<Nav />
		<h1 class="text-center my-8 md:m-16 text-4xl">
			{$appState.title}
		</h1>
		<slot />
	</div>
</div>
