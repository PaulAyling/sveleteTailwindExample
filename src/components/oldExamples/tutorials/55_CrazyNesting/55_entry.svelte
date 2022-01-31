<script>
	import Content from './Content.svelte';

	let nodes = {
		1: { id: 1, items: [{ id: 2 }] },
		2: { id: 2, items: [{ id: 3 }, { id: 4 }] },
		3: { id: 3, items: [] },
		4: { id: 4, items: [] }
	};

	console.log('REAL THING:', JSON.stringify(nodes[1].id));
</script>

<h3>Try dragging node2 into node3 and then node4 into node2</h3>
<Content node={nodes[1]} bind:nodes />
