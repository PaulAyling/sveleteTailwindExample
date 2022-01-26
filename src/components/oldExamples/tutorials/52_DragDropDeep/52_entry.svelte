<script>
	import Droppable from './Droppable_arc.svelte';
	import Card from './card/Card.svelte'
	import { cardLayout, pointerOverCard } from './store';
	const startingId = 0;
</script>
ver 52
<Droppable parentId={startingId} bind:pointerOverCard={$pointerOverCard} bind:cardLayout={$cardLayout}/>


<style>
	h1 {
		text-transform: uppercase;
		font-size: 1em;
	}
	.delete {
		background: red;
	}
</style>
