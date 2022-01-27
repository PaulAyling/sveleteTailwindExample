<script>
	export let parentId;
	import { dragStart } from '../utilities';
	import { cardLayout } from '../store';
	import { flip } from 'svelte/animate';
	import Card from './Card.svelte';
	$: loopingArr = $cardLayout[parentId].children;
</script>
<Card parentId={parentId} />
{#each loopingArr as childId, childIndex (childId)}
	<div class="item bg-blue-500 rounded-md m-2" animate:flip draggable={true} on:dragstart={(event) => dragStart(event, parentId, childIndex)}>
			<Card parentId={childId} />
	</div>
    
{/each}

<style>
	.item {
		display: inline; /* required for flip to work */
	}
	li {
		background-color: lightcoral;
		padding: 0 3px 0 3px;
		cursor: pointer;
		display: inline-block;
		margin-right: 10px;
		border-radius: 3px;
		margin: 2px;
		min-height: 80px; /* needed when empty */
		min-width: 40px;
	}
	li:hover {
		background: orange;
		color: white;
	}
</style>
