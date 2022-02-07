<script>
	import Card from './Card.svelte';
	// import { cardLayout } from './stores/cardLayout';
	import {cards} from './stores/cards'
	import ShowPreview from './furniture/buttons/ShowPreview.svelte'
	import Preview from './Preview.svelte'
	import {nodes} from './stores/cardLayout'

	cards.subscribe((value) => {
		console.log('STORE:CARDS:', value);
	});


// 	let nodes = {
//     1: { id: 1, items: [{ id: 2 },{ id: 3 }] ,cols:false},
//     2: { id: 2, items: [{ id: 4 },{id: 5}] ,cols:false},
//     3: { id: 3, items: [] ,cols:false},
//     4: { id: 4, items: [] ,cols:false},
//     5: { id: 5, items: [{ id: 6 }] ,cols:false},
//     6: { id: 6, items: [] ,cols:false},
// };
	let colorShade = 1;
	let preview = false
	const cardId = 1
</script>

<main id="pauls" label="myMain" class=" p-3">
	<ShowPreview bind:preview={preview} />
	{#if preview == true}
	<Preview cardId = {cardId} {nodes}/>
	{:else}
	<Card node={nodes[1]}  {colorShade} />
	{/if}

</main>
