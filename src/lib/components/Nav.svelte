<script>
	const links = ['home', 'toolkits', 'about'];
</script>

<nav
	class="p-2 flex md:flex-row flex-col justify-between items-start md:items-center shadow bg-white"
>
	<a href="/" class="flex items-center h-16">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="100%"
			height="100%"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-blocks p-1"
			><rect width="7" height="7" x="14" y="3" rx="1" /><path
				d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"
			/></svg
		>
		<div class="m-2">
			<p>Scratch</p>
			<p>Toolkit</p>
		</div>
	</a>
	<ul class="flex py-4 gap-x-4">
		{#each links as link}
			<li>
				{#if link == 'home'}
					<a class="p-2" href={'/'}>{link}</a>
				{:else}
					<a class="p-2" href={'/' + link}>{link}</a>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
