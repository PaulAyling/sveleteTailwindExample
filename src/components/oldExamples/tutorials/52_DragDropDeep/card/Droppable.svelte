<script>
	export let parentId;
	export let pointerOverCard;
	export let cardLayout;
	import { drop } from '../utilities';
	import { flip } from 'svelte/animate';
	import Family from './Family.svelte';
	import Single from './Single.svelte';

	const hasChildren = (id) => {
		if (cardLayout[id].children.length === 0) {
			return false;
		}
		return true;
	};
	console.log(parentId,'has children:', hasChildren(parentId));
	$: loopingArr = cardLayout[parentId].children;
</script>

{#each loopingArr as childId, childIndex (childId)}
	<div
		animate:flip
		class:hovering={pointerOverCard === childId}
		on:dragenter={() => (pointerOverCard = childId)}
		on:dragleave={() => (pointerOverCard = null)}
		on:drop={(event) => drop(event, childId)}
		ondragover="return false"
		class="flex-col  bg-black p-3 rounded-md   text-white"
	>
		{#if hasChildren(parentId) === true}
			<!-- <Family parentId={parentId} childId={childId} bind:pointerOverCard={pointerOverCard} bind:cardLayout={cardLayout} /> -->
			{parentId} chlidren
		{:else}
			{parentId} no children
		{/if}
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
		padding: 10px;
	}
</style>
