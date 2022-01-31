<script>
	import { flip } from 'svelte/animate';
	import { dndzone, SHADOW_PLACEHOLDER_ITEM_ID } from 'svelte-dnd-action';

	export let nodes;
	export let node;

	const flipDurationMs = 300;
	function handleDndConsider(e) {
		node.items = e.detail.items;
	}
	function handleDndFinalize(e) {
		node.items = e.detail.items;
		console.log(e);
		nodes = { ...nodes };
	}
	var layout = ""
	if(node.id ==2) {
		layout = "flex flex-col"
	}
	console.log(layout)

</script>

<!-- <article style="color:{node.color}"> -->
<article >

	<b>CARD: {node.id}</b>
	{#if node.hasOwnProperty('items')}
		<section
			use:dndzone={{ items: node.items, flipDurationMs, centreDraggedOnCursor: true }}
			on:consider={handleDndConsider}
			on:finalize={handleDndFinalize}
			class={layout}
		>
			<!-- WE FILTER THE SHADOW PLACEHOLDER THAT WAS ADDED IN VERSION 0.7.4, filtering this way rather than checking whether 'nodes' have the id became possible in version 0.9.1 -->
			{#each node.items.filter((item) => item.id !== SHADOW_PLACEHOLDER_ITEM_ID) as item (item.id)}
				<div animate:flip={{ duration: flipDurationMs }} class="item">
					<svelte:self bind:nodes node={nodes[item.id]} />
				</div>
			{/each}
		</section>
	{/if}
</article>

<style>
	section {
		width: auto;
		min-height: 40px;
		min-width:200px;
		border: 0px solid black;
		padding: 0.4em;
		/* this will allow the dragged element to scroll the list */
		overflow-y: auto;
		height: auto;
		background-color: red;
		border-radius: 5px;
	}
	div {
		padding: 0.3em;
		border: 0px solid red;
		margin: 0.15em ;
	}
	.item {
		background-color: rgba(00, 100, 100, 0.1);
		border-radius: 8px;
	}
	article {
		width: auto;
		padding: 0.4em;
		border-radius: 5px;
		color:white;
	}
</style>
