<script>
	import Card from './Card.svelte';
	import { cardLayout } from './stores/cardLayout';
	import {cards} from './stores/cards'

	cards.subscribe((value) => {
		console.log('STORE:CARDS:', value);
	});


	let nodes = {
    1: { id: 1, items: [{ id: 2 },{ id: 3 }] ,cols:false},
    2: { id: 2, items: [{ id: 4 },{id: 5}] ,cols:false},
    3: { id: 3, items: [] ,cols:false},
    4: { id: 4, items: [] ,cols:false},
    5: { id: 5, items: [{ id: 6 }] ,cols:false},
    6: { id: 6, items: [] ,cols:false},
};
	let colorShade = 0;
</script>

<main id="pauls" label="myMain" class=" p-3">
	<Card node={nodes[1]} bind:nodes {colorShade} />
</main>
