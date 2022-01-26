<script>
	export let parentId;
	export let pointerOverCard;
	export let cardLayout;
	import { drop } from '../utilities';
	import { flip } from 'svelte/animate';
	import Draggable from './Draggable.svelte';
	$: loopingArr = cardLayout[parentId].children;
</script>

{#each loopingArr as childId, childIndex (childId)}
	<div animate:flip>
		
		<ul
		class:hovering={pointerOverCard === childId}
		on:dragenter={() => (pointerOverCard = childId)}
		on:dragleave={() => (pointerOverCard = null)}
		on:drop={(event) => drop(event, childId)}
		ondragover="return false"
		class="bg-blue-200"
		>
		<b>{childId}</b>
			<Draggable 
                parentId={childId} 
                bind:pointerOverCard={pointerOverCard} />
		</ul>
	</div>
{/each}

<style>
	.hovering {
		border-color: orange;
	}
	ul {
		border: solid lightgray 1px;
		display: flex;
		min-height: 40px; /* needed when empty */
		min-width: 40px;
		padding: 10px;
	}
	.bg-blue-200 {
		background: blue;
		padding:10px;
	}
</style>
