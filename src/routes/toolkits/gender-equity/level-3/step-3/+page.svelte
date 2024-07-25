<script>
	import PostIt from '$lib/components/PostIt.svelte';
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.pattern = '/patterns/step-3.svg';
		$appState.dialogue = 'Reflect on it! 💭';
		$appState.title = '🚿 Step 3 : Think Again !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-3/step-2';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-3/quiz';
	});

	const posts = [
		'Egyptian men and women used makeup (kohl / kajal)? Wealthy Egyptians wore jewelry and heavily perfumed wigs regardless of gender. Even Indian kings used to wear ornaments and heavily embroidered knee-length kurtas. How does this contrast with traditional gender role expectations held by many in our current society?',
		'Hanfu is the traditional clothing worn by the Han Chinese that emerged during Shang dynasty; the clothing was unisex. Both females and males could both be seen wearing a similar version of the hanfu called shenyi, a long robe with connecting top and bottom parts. How does this compare or contrast with typical clothing worn today in China or the United States?'
	];
</script>

<div class="max-w-screen-sm mx-auto prose-xl">
	<p>
		Think about the following questions and share your thoughts with your friends. Based on the
		below picture, how would you describe this person’s gender? What was the basis for your
		guess/description?
	</p>
	<img class="m-0 h-96 rounded-xl shadow" src="/james.png" alt="" />
	<p>
		The person in this is dressed in Puritan fashion (fashion trend of that time) in 1674. The
		painting is of Mr. John Freake, a wealthy merchant and attorney in Massachusetts.
	</p>

	{#each posts as post}
		<PostIt {post} />
	{/each}

	<p>Do you think stereotypes about gender roles affect how people are treated in society?</p>
</div>
