<script>
	export let cardId;
	export let pointerOverCard;
	export let cardLayout;
	import { drop } from './utilities.js';
	import Droppable from './Droppable.svelte';
	import { flip } from 'svelte/animate';

	$: loopingArr = cardLayout[cardId].children;
</script>

{#each loopingArr as childId, cardIndex (childId)}
	<div animate:flip>
		<b>{childId}</b>
		<ul
			class:hovering={pointerOverCard === childId}
			on:dragenter={() => (pointerOverCard = childId)}
			on:dragleave={() => (pointerOverCard = null)}
			on:drop={(event) => drop(event, childId)}
			ondragover="return false"
			class="bg-blue-200"
		>
			<Droppable cardId={childId} bind:pointerOverCard {cardIndex} />
		</ul>
	</div>
{/each}

<style>
	.hovering {
		border-color: orange;
	}
	ul {
		border: solid lightgray 1px;
		display: flex; /* required for drag & drop to work when .item display is inline */
		height: 40px; /* needed when empty */
		padding: 10px;
	}
    .bg-blue-200{
        background:blue;
    }
</style>
