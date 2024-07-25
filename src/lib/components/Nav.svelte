<script>
	import { page } from '$app/stores';
	$: currentURL = $page.url.pathname;
	const links = ['home', 'toolkits', 'about'];
	const style = 'px-2 py-1 text-xl no-underline rounded-full';
</script>

<div class="p-2 flex flex-col border-b shadow md:flex-row justify-between items-center bg-white">
	<a href="/" class="relative h-16">
		<img class="m-0 h-16" loading="lazy" src="/scratch.svg" alt="Scratch Toolkit Logo" />
		<p
			class="px-2 py-1 bg-[#f9a474] uppercase text-[#5B2715] text-xl font-semibold shadow absolute -bottom-14 -right-8 -rotate-6"
		>
			Toolkit
		</p>
	</a>
	<nav class="m-2 p-2 flex gap-x-2 rounded-full bg-[#E3E1D9]">
		{#each links as link}
			<a
				href={link === 'home' ? '/' : '/' + link}
				class="{style} {(currentURL === '/' && link === 'home') || currentURL.includes(link)
					? 'bg-[#333333] text-[#D3D3D3] shadow'
					: 'hover:bg-[#fcfaf4] text-[#333333]'}"
			>
				{link}
			</a>
		{/each}
	</nav>
</div>
