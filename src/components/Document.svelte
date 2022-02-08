<script>
	import Card from './Card.svelte';
	import {cards} from './stores/cards'
	import ShowPreview from './furniture/buttons/ShowPreview.svelte'
	import Preview from './preview/Preview.svelte'
	import {nodes} from './stores/cardLayout'

	cards.subscribe((value) => {
		console.log('STORE:CARDS:', value);
	});

	let colorShade = 1;
	let preview = false
	const cardId = 1
</script>

<main id="pauls" label="myMain" class=" p-3">
	<ShowPreview bind:preview={preview} />
	{#if preview == true}
	<Preview {cardId} {colorShade} node={$nodes[1]}/>
	{:else}
	<Card node={$nodes[1]}  {colorShade} />
	{/if}

</main>
