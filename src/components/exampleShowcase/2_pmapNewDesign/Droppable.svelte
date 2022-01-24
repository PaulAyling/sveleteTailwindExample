<script>
	export let cardId;
	export let pointerOverCard;
	export let cardLayout;

	import { drop } from './stores/tools';
	import Header from './Header.svelte';
	import Body from './Body.svelte';
	import Card from './Card.svelte';
	import { flip } from 'svelte/animate';

	$: loopingArr = cardLayout[cardId].children;
</script>

<Header id={cardId} />
<Body {cardId} />
{#each loopingArr as childId, cardIndex (childId)}
	<div animate:flip>
		{childId}
		<ul
			class:hovering={pointerOverCard === childId}
			on:dragenter={() => (pointerOverCard = childId)}
			on:dragleave={() => (pointerOverCard = null)}
			on:drop={(event) => drop(event, childId)}
			ondragover="return false"
			class="bg-blue-200"
		>
			somthing
		</ul>
		<Card cardId={childId} {cardIndex} />
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
</style>
