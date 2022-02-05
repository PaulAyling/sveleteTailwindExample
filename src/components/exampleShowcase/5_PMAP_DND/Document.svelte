<script>
	import Card from './Card.svelte';
	import { cardLayout } from './stores/cardLayout';

	cardLayout.subscribe((value) => {
		console.log('STORE:LAYOUT:', value);
	});

	let nodes = {
		1: { id: 1, items: [{ id: 2 }] },
		2: { id: 2, items: [{ id: 3 }, { id: 4 }, { id: 5 }] },
		3: { id: 3, items: [] },
		4: { id: 4, items: [] },
		5: { id: 5, items: [{ id: 6 }] },
		6: { id: 6, items: [] }
	};
	let colorShade = 900;
</script>

<main id="pauls" label="myMain" class=" p-3">
	<Card node={$cardLayout[1]} bind:nodes {colorShade} />
</main>
