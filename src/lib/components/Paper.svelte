<script>
	export let title = 'Enter title here.';
</script>

<div
	class="max-w-screen-sm md:mx-auto mx-2 prose-xl px-4 md:px-8 py-8 md:py-16 border bg-white shadow rounded-xl font-overpass"
>
	<h2 class="text-stone-700">{title}</h2>
	<slot />
</div>
