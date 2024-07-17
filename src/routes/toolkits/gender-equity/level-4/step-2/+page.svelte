<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.dialogue = 'Learn more about gender identities and sexualities. 📚';
		$appState.title = '💭 Step 2 : Think !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-4/step-1';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-4/step-3';
	});
</script>

<div class="max-w-screen-sm mx-auto prose-xl">
	<ol>
		<li>
			Gender identities- There are multiple gender identities recognised in the world, for ex :
			Agender, androgyne, bigender, cisgender, transgender and more (here is a list of all the
			recognised gender identities: List of gender identities - Wikipedia)
		</li>
		<li>
			Sexual identities are about who we are attracted to romantically or who we might have crushes
			on. Some people might like boys, some might like girls, and some might like both boys and
			girls. Some people might not feel attraction to anyone, and that's okay too. For ex :
			heterosexual, homosexual, bisexual et cetera.
		</li>
	</ol>
	<p>
		As you grow up, you might start thinking more about who you are and who you’re attracted to.
		This is a part of understanding your identity.
	</p>

	<p>
		Take care of a few sensitivities while talking to people of different genders. For example, ask
		what pronouns would they want to be called: they/ them/ he/ she.
	</p>

	<p>
		Did you know that multiple genders have existed as part of many ancient communities all around
		the world for centuries.
	</p>

	<img src="/bugis.jpg" alt="" />

	<ol>
		<li>
			<p>Bugis- Indonesia</p>
			<p>
				The Buginese people are an ethnic group in Indonesia. There are about six million Bugis. The
				Bugis people recognize five different genders. This concept of gender has been part of Bugis
				culture for at least six centuries.
			</p>
		</li>
		<li>
			<p>Australian Aboriginal- Sistergirl and Brotherboy</p>

			<p>
				A brotherboy is an individual who is assigned female at birth but feels masculine
				spiritually and may take on male roles in the community and/or society. A sistergirl is an
				individual who is assigned male at birth but feels feminine spiritually and may take on
				female roles in the community and/or society. These identities are a cultural and gender
				identity.
			</p>
		</li>
	</ol>
	<p>
		There are many many more such examples. You can read more about these <a
			href="https://www.apa.org/ed/precollege/topss/lessons/gender.pdf">here</a
		>.
	</p>
</div>
