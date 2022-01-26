<script>
	export let parentId;
	import { cardLayout, pointerOverCard } from '../store';
	import Droppable from './Droppable.svelte';

	const cardName = 'Card ID: ' + parentId;
</script>

<article title={cardName} class="flex-col rounded-4 bg-red-500">
	<Droppable {parentId} bind:pointerOverCard={$pointerOverCard} bind:cardLayout={$cardLayout}>

	</Droppable>
</article>
