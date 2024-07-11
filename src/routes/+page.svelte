<script>
	import Lily from '$lib/components/Lily.svelte';
	import Nav from '$lib/components/Nav.svelte';
	let smile = false;
</script>

<Nav />
<div class="m-2 flex flex-col md:flex-row-reverse justify-center items-center md:translate-y-1/2">
	<div class="p-4">
		<Lily {smile} />
	</div>
	<div class="p-4 max-w-sm">
		<h2 class="text-4xl font-bold">Unleash your creativity with scratch !</h2>
		<a
			href="/toolkits"
			on:mouseenter={() => {
				smile = true;
			}}
			on:mouseleave={() => {
				smile = false;
			}}
		>
			<button class="my-4 p-4 rounded-xl border">Get Started</button>
		</a>
	</div>
</div>

<svg class="fixed top-0 -z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
	><path
		fill="#C3B2E7"
		fill-opacity="1"
		d="M0,160L40,181.3C80,203,160,245,240,245.3C320,245,400,203,480,165.3C560,128,640,96,720,90.7C800,85,880,107,960,133.3C1040,160,1120,192,1200,213.3C1280,235,1360,245,1400,250.7L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
	></path></svg
>
