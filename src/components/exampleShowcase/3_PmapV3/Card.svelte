<script>
	import { flip } from 'svelte/animate';
	export let cardId
    export let pointerOverCard
	import { cardLayout } from './stores/cardLayout';
	import {drop } from './stores/tools'
	
	import Header from './Header.svelte';
    import Draggable from './Draggable.svelte'
</script>

<div>
    {#each  $cardLayout[cardId].children as childId, cardIndex (childId)}
	<div animate:flip>
		<!-- <Header cardId={childId}/> -->
		<!-- card{childId} -->
		<ul
			class:hovering={pointerOverCard === childId}
			on:dragenter={() => (pointerOverCard = childId)}
			on:dragleave={() => (pointerOverCard = null)}
			on:drop={(event) => drop(event, childId)}
			ondragover="return false"
			class="bg-blue-200"
		>
		<Header cardId={childId}/>

			<Draggable cardId = {childId}  
            cardIndex={cardIndex} />

		</ul>
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
		}
		li:hover {
			background: orange;
			color: white;
		}
	</style>
</div>
