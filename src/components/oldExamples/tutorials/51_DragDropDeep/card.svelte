<script>
	export let parentId;
	export let pointerOverCard;
	export let cardLayout;
	import Droppable from './Droppable.svelte';
	import Draggable from './Droppable.svelte';
	const cardName = 'Card ID: ' + parentId;
</script>

<article title={cardName}>
	<Droppable
		parentId={parentId      }
		bind:pointerOverCard={$pointerOverCard}
		bind:cardLayout={$cardLayout}    >
        <Draggable />
</Droppable>
</article>
