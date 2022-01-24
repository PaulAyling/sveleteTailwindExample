<script>
	export let cardId;
	import { dragStart } from './stores/tools';
	import { cardLayout,pointerOverCard } from './stores/cardLayout';
	import { flip } from 'svelte/animate';
	import Header from './Header.svelte';
    import Draggable from './Draggable.svelte'
	$: loopingArr = $cardLayout[cardId].children;
</script>

<div>
    {#each loopingArr as childId, cardIndex (childId)}
	<div animate:flip>
		<Header cardId={childId}/>
		<ul
			class:hovering={$pointerOverCard === childId}
			on:dragenter={() => ($pointerOverCard = childId)}
			on:dragleave={() => ($pointerOverCard = null)}
			on:drop={(event) => drop(event, childId)}
			ondragover="return false"
			class="bg-blue-200"
		>
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
