<script>
	import { page } from '$app/stores';
	$: currentURL = $page.url.pathname;
	const links = ['home', 'toolkits', 'about'];
	const style = 'no-underline uppercase font-bold py-2 px-4 rounded-full';
</script>

<nav class="p-2 flex flex-col md:flex-row justify-between items-center bg-[#333333]">
	<a href="/" class="flex justify-center items-center no-underline h-16">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="100%"
			height="100%"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="0.8"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-blocks stroke-[#333333] fill-[#E3E1D9] w-16"
			><rect width="7" height="7" x="14" y="3" rx="1" /><path
				d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"
			/></svg
		>
		<p class="mx-2 text-4xl text-justify text-[#E3E1D9] font-bold">Scratch Toolkit</p>
	</a>
	<nav class="mx-auto my-4 md:m-2 p-2 flex gap-2 rounded-full bg-[#E3E1D9] shadow-inner">
		{#each links as link}
			<a
				href={link === 'home' ? '/' : '/' + link}
				class="{style} {(currentURL === '/' && link === 'home') || currentURL.slice(1) === link
					? 'bg-[#333333] text-[#D3D3D3] shadow'
					: 'hover:bg-[#fcfaf4] text-[#333333]'}"
			>
				{link}
			</a>
		{/each}
	</nav>
</nav>
