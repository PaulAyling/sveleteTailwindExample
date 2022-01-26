<script>
	export let parentId
	export let pointerOverCard
	import {dragStart} from './utilities.js'
	import {cardLayout} from './store.js'
	import {flip} from 'svelte/animate';
	import Draggable from './Droppable_arc.svelte'
	$: loopingArr = $cardLayout[parentId].children
</script>

{#each loopingArr as childId, childIndex (childId)}
	<div class="item" animate:flip>
		<li
		draggable={true}
		on:dragstart={(event) => dragStart(event, parentId, childIndex)}>
		{childId}
		<Draggable
		parentId={childId}
		bind:pointerOverCard={pointerOverCard}
		bind:cardLayout={$cardLayout}/>
	
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
		margin:2px;
		min-height: 80px; /* needed when empty */
		min-width: 40px;
	}
	li:hover {
		background: orange;
		color: white;
	}
</style>
