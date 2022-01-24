<script>
	export let cardId
	export let cardIndex
// 	export let arr
	import {dragStart} from './stores/tools'
	import {cardLayout} from './stores/cardLayout'
	import Card from './Card.svelte' 
	import {flip} from 'svelte/animate';
</script>
{#each $cardLayout[cardId].children as childId, childIndex (childId)}
	<div class="item" animate:flip>
		<li
			draggable={true}
			on:dragstart={(event) => dragStart(event, cardId, cardIndex)}>
        {childId} down and dirty
		<!-- BELOW IS WAHT CRASHES MY APP to crash with : Maximum call stack size exceeded -->
		<Card cardId={childId}/> 
		</li>
	</div>
{/each}

<style>
	.item {
		display: inline; /* required for flip to work */

	}
	li {
		background-color: lightcoral;
        padding:0 3px 0 3px;
		cursor: pointer;
		display: inline-block;
		margin-right: 10px;
        border-radius: 3px;
		
	}
	li:hover {
		background: orange;
		color: white;
	}
</style>
