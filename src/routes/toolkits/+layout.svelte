<script>
	import Lily from '$lib/components/Lily.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { onMount } from 'svelte';

	const NavButtonStyle =
		'px-4 py-2 rounded-xl bg-black text-xl text-white shadow-md hover:bg-sky-200 hover:text-sky-900 transition-colors duration-200';

	let width = 0;
	let height = 0;
	onMount(() => {
		width = screen.width;
		height = screen.height;
	});

	import { appState } from '$lib/stores';
	import SvelteMarkdown from 'svelte-markdown';
</script>

<div class="w-screen h-screen flex">
	{#if width >= 1024 && width > height}
		<div class="w-64 border-r shadow flex flex-col p-2">
			<div class="m-2">
				<Lily expression={$appState.expression} />
			</div>
			<div class="m-2 flex-grow border-b">
				<SvelteMarkdown source={$appState.dialogue} />
			</div>
			<div class="m-2 border-b">
				<p>{$appState.resource}</p>
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
	<div class="flex-grow flex flex-col relative">
		<Nav />
		<h1 class="text-center font-bold my-8 md:m-16 text-4xl text-stone-400">
			{$appState.title}
		</h1>
		<slot />
		<div class="w-full p-4 absolute bottom-0 flex flex-row justify-between">
			{#if $appState.leftButtonLink != ''}
				<a class={NavButtonStyle} href={$appState.leftButtonLink}>
					<button>{$appState.leftButtonLabel}</button>
				</a>
			{/if}
			{#if $appState.rightButtonLink != ''}
				<a class={NavButtonStyle} href={$appState.rightButtonLink}>
					<button>{$appState.rightButtonLabel}</button>
				</a>
			{/if}
		</div>
	</div>
</div>
