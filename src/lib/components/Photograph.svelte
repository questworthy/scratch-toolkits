<script>
	export let src = 'https://picsum.photos/seed/picsum/200/300';
	export let alt = 'Insert alt attribute here.';

	export let width = 400;
	export let height = 200;

	export let color = '#F9A474';
</script>

<div style="height: {height}px;width: {width}px;" class="relative mx-auto mb-12">
	<img class="m-0 object-cover shadow" {src} {alt} />
	<div
		class="absolute top-4 left-4 -z-50"
		style="background-color:{color};height: {height}px;width:{width}px;"
	></div>
</div>
