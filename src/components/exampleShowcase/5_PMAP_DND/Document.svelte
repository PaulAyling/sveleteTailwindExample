<script>
	import Card from './Card.svelte';

	let nodes = {
		1: { id: 1, items: [{ id: 2 }] },
		2: { id: 2, items: [{ id: 3 },{ id: 4 },{id: 5}] },
		3: { id: 3, items: [] },
		4: { id: 4, items: [] },
		5: { id: 5, items: [{ id: 6 }] },
		6: { id: 6, items: [] },

	};

</script>

<Card node={nodes[1]} bind:nodes />
