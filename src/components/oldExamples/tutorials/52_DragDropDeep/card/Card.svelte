<script>
	export let parentId;
	import { cardLayout, pointerOverCard } from '../store';
	import Droppable from './Droppable.svelte';

	const cardName = 'Card ID: ' + parentId;
</script>

<article title={cardName} class="text-black p-2">
	<Droppable parentId={parentId} bind:pointerOverCard={$pointerOverCard} bind:cardLayout={$cardLayout} />
</article>




