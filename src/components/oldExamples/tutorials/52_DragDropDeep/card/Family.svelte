<script>
	export let parentId;
	export let pointerOverCard;
	import Draggable from './Draggable.svelte';

	const cardName = 'Card ID: ' + parentId;
</script>

<p class="">CARD:{parentId}:--Has children</p>
<div class="bg-gray-100 min-h-24">
	<Draggable parentId={parentId} bind:pointerOverCard />
</div>
