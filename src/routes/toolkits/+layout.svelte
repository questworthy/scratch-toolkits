<script>
	import quest from '$lib/assets/logos/quest.svg';
	import scratch from '$lib/assets/logos/scratch.svg';

	import Lily from '$lib/components/Lily.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { onMount } from 'svelte';

	const NavButtonStyle =
		'absolute bottom-0 m-4 md:m-8 p-4 rounded-xl text-2xl font-bold md:text-3xl shadow-md  active:scale-90 active:translate-y-2  transition-all duration-200';

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
		<div class="w-64 border-r shadow flex flex-col p-2 bg-white">
			<div class="m-2">
				<Lily expression={$appState.expression} />
			</div>
			<div class="m-2 flex-grow border-b text-lg">
				<p>{$appState.dialogue}</p>
			</div>
			<div class="m-2 border-b text-lg">
				<p>{$appState.resource}</p>
				<ul class="my-4 list-disc">
					{#each $appState.links as link}
						<li>
							<a class="no-underline" target="_blank" href={link.url}>{link.label}</a>
						</li>
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
		<div
			style="background-image: url({$appState.pattern});"
			class="flex-1 overflow-y-scroll flex flex-col"
		>
			<h1 class="md:mb-32 py-8 text-center text-[#52225E] bg-[#C3B2E7] shadow">
				{$appState.title}
			</h1>
			<div class="flex-1">
				<slot />
			</div>
		</div>
		{#if $appState.leftButtonLink != ''}
			<a
				class="left-0 {NavButtonStyle} bg-[#b8cddd] text-[#1d435d]"
				href={$appState.leftButtonLink}
			>
				<button>{$appState.leftButtonLabel}</button>
			</a>
		{/if}
		{#if $appState.rightButtonLink != ''}
			<a
				class="right-0 {NavButtonStyle} bg-[#c5d68c] text-[#1C471F]"
				href={$appState.rightButtonLink}
			>
				<button>{$appState.rightButtonLabel}</button>
			</a>
		{/if}
	</div>
</div>
