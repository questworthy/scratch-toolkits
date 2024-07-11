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
</script>

<div class="w-screen h-screen flex">
	{#if width >= 1024 && width > height}
		<div class="w-64 border-r shadow flex flex-col p-2">
			<div class="m-2">
				<Lily />
			</div>
			<p class="m-2 flex-grow border-b">
				Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
			</p>
			<div class="m-2 border-b">
				<p>Insert resource description here. This should ideally be a one-liner.</p>
				<ul class="my-4 list-disc list-inside">
					<li>asd</li>
					<li>asd</li>
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
		<slot />
	</div>
</div>
