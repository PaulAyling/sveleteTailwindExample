<script>
	import { flip } from 'svelte/animate';
	import { dndzone, SHADOW_PLACEHOLDER_ITEM_ID } from 'svelte-dnd-action';
	import Header from './Header.svelte';
	import Info from './Info.svelte'

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
	var layout = '';
	if (node.id == 2) {
		layout = 'flex flex-col';
	}
	// console.log('event', e)
</script>
<article class="p-2 rounded-md  bg-blue-400">

	<Header cardId={node.id} />
	<!-- DROPZONE -->
	{#if node.hasOwnProperty('items')}
		<section
			use:dndzone={{ items: node.items, flipDurationMs, centreDraggedOnCursor: true }}
			on:consider={handleDndConsider}
			on:finalize={handleDndFinalize}
			class={layout +" rounded-md  bg-green-400"}
		>
			<!-- WE FILTER THE SHADOW PLACEHOLDER THAT WAS ADDED IN VERSION 0.7.4, filtering this way rather than checking whether 'nodes' have the id became possible in version 0.9.1 -->
			{#each node.items.filter((item) => item.id !== SHADOW_PLACEHOLDER_ITEM_ID) as item (item.id)}
				<div animate:flip={{ duration: flipDurationMs }} class="item rounded-md p-2 ">
					<svelte:self bind:nodes node={nodes[item.id]} />
				</div>
			{/each}
			<Info />
			<div class="p-1">+</div>
		</section>
	{/if}
</article>

<style>
	section {
		width: auto;
		border: 0px solid black;
		/* this will allow the dragged element to scroll the list */
		overflow-y: auto;
		height: auto;
	}

</style>
