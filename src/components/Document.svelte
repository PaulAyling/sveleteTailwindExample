<script>
	import Card from './Card.svelte';
	import { cardLayout } from './stores/cardLayout';
	import {cards} from './stores/cards'

	cards.subscribe((value) => {
		console.log('STORE:CARDS:', value);
	});


	let nodes = {
    1: { id: 1, items: [{ id: 2 },{ id: 3 }] },
    2: { id: 2, items: [{ id: 4 },{id: 5}] },
    3: { id: 3, items: [] },
    4: { id: 4, items: [] },
    5: { id: 5, items: [{ id: 6 }] },
    6: { id: 6, items: [] },
};
	let colorShade = 900;
</script>

<main id="pauls" label="myMain" class=" p-3">
	<Card node={nodes[1]} bind:nodes {colorShade} />
</main>
