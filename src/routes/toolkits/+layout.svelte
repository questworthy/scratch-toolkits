<script>
	import quest from '$lib/assets/logos/quest.svg';
	import scratch from '$lib/assets/logos/scratch.svg';

	import Lily from '$lib/components/Lily.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { onMount } from 'svelte';

	const NavButtonStyle =
		'absolute bottom-0 m-4 px-4 py-2 rounded-xl bg-black text-xl text-white shadow-md hover:bg-sky-200 hover:text-sky-900 transition-colors duration-200';

	let width = 0;
	let height = 0;
	onMount(() => {
		width = screen.width;
		height = screen.height;
	});

	import { appState } from '$lib/stores';

	const logos = [
		{ src: quest, alt: 'Quest Alliance Logo', href: 'https://www.questalliance.net/' },
		{ src: scratch, alt: 'Scratch Logo', href: 'https://scratch.mit.edu/' }
	];
</script>

<div class="w-screen h-screen flex">
	{#if width >= 1024 && width > height}
		<div class="w-64 border-r shadow flex flex-col p-2">
			<div class="m-2">
				<Lily expression={$appState.expression} />
			</div>
			<div class="m-2 flex-grow border-b">
				<p>{$appState.dialogue}</p>
			</div>
			<div class="m-2 border-b">
				<p>{$appState.resource}</p>
				<ul class="my-4 list-disc list-inside">
					{#each $appState.links as link}
						<li><a href={link.url}>{link.label}</a></li>
					{/each}
				</ul>
			</div>
			<footer class="m-2 flex gap-2">
				{#each logos as logo}
					<a target="_blank" href={logo.href}>
						<img class="m-0 h-12 bg-white rounded-full border" src={logo.src} alt={logo.alt} />
					</a>
				{/each}
			</footer>
		</div>
	{/if}
	<div class="flex-grow flex flex-col relative">
		<Nav />
		<div class="pb-40 grow overflow-y-scroll">
			<h1 class="my-16 text-center font-bold text-4xl text-stone-400">
				{$appState.title}
			</h1>

			<slot />
		</div>
		{#if $appState.leftButtonLink != ''}
			<a class="left-0 {NavButtonStyle}" href={$appState.leftButtonLink}>
				<button>{$appState.leftButtonLabel}</button>
			</a>
		{/if}
		{#if $appState.rightButtonLink != ''}
			<a class="right-0 {NavButtonStyle}" href={$appState.rightButtonLink}>
				<button>{$appState.rightButtonLabel}</button>
			</a>
		{/if}
	</div>
</div>
