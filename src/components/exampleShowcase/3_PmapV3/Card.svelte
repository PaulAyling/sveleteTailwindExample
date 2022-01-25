<script>
	import { flip } from 'svelte/animate';
	export let cardId;
	import { cardLayout,pointerOverCard } from './stores/cardLayout';
	import { drop } from './stores/tools';
	import Header from './Header.svelte';
	import Draggable from './Draggable.svelte';
	console.log('cardChildId:',cardId)
	console.log('cardChildren:',$cardLayout[cardId].children)
</script>

<div>
	<!-- <Header cardId={cardId}/> -->
	<articles class="flex-row mr-2 pl-2">

		{#if $cardLayout[cardId].children.length === 0}
{/if}
		{#each $cardLayout[cardId].children as childId, cardIndex (childId)}
		<div animate:flip>
			<!-- <Header cardId={cardId}/> -->
			<ul
				class:hovering={$pointerOverCard === childId}
				on:dragenter={() => ($pointerOverCard = childId)}
				on:dragleave={() => ($pointerOverCard = null)}
				on:drop={(event) => drop(event, childId)}
				ondragover="return false"
				class="bg-blue-200"
			>
			{childId}
			<!-- CARD:{childId} -->
			<!-- <Header cardId={childId}/>	 -->
			<!-- <Header cardId={childId} /> -->
				<Draggable cardId={childId} {cardIndex} />
			</ul>
		</div>
	{/each}
	</articles>
	

	<style>
		.item {
			display: inline; /* required for flip to work */
		}
		li {
			background-color: lightcoral;
			padding: 0 3px 0 3px;
			cursor: pointer;
			display: inline-block;
			margin-right: 30px;
			border-radius: 3px;
		}
		li:hover {
			background: orange;
			color: white;
		}
		ul{
			margin-left:10px;
			padding:10px;
			border:2px solid black;

			
		}
	</style>
</div>
