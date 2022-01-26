<script>
	import Droppable from './Droppable.svelte';
	import { cardLayout, pointerOverCard } from './store.js';
	import { add, remove } from './utilities.js';
	// cardLayout.subscribe((value) => {
	// 	console.log('STORE:', value);
	// });
	const startingId = 0;
</script>
ver 51
<Droppable
	parentId={startingId}
	bind:pointerOverCard={$pointerOverCard}
	bind:cardLayout={$cardLayout}
/>

<button class="delete" on:click={() => remove(3, 0)}> Delete </button>
<button class="add" on:click={() => add(2, 9)}> Add </button>
<!-- //style below -->


<style>
	h1 {
		text-transform: uppercase;
		font-size: 1em;
	}
	.delete {
		background: red;
	}
</style>
