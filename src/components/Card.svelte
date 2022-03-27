<script>
	import { flip } from 'svelte/animate';
	import { dndzone, SHADOW_PLACEHOLDER_ITEM_ID } from 'svelte-dnd-action';
	import Header from './Header.svelte';
	import Body from './Body.svelte';
	import Add from './furniture/buttons/Add.svelte';

	import { nodes, handleDndConsider, handleDndFinalize } from './stores/nodes';
	import { addRecord } from '../functions/docs/add';
	import { removeRecord } from '../functions/docs/remove';
	export let node;
	export let colorShade;
	export let cardId;
	// See  handleDndConsider, handleDndFinalize to update node
	const changeState = (newItem) => {
		node.items = newItem;
	};

	//FORMATTING / CONFIG
	let bodyVisible = false;
	let editUrl = false;
	const flipDurationMs = 300;
	const toggleCols = () => {
		nodes.update((val) => {
			val[node.id].cols = !val[node.id].cols;
			console.log('val', val, node.id);

			return val;
		});
	};
	$: dragZoneStyle = $nodes[node.id].cols
		? 'w-full p-1  rounded-t-md flex flex-row level' + colorShade
		: 'w-full p-1  rounded-t-md flex flex-col level' + colorShade;
</script>

<article class={'w-full p-2  rounded-md flex flex-col m-1  level' + colorShade}>
	<Header
		cardId={node.id}
		bind:bodyVisible
		bind:editUrl
		{colorShade}
		{removeRecord}
		bind:cols={node.cols}
		{toggleCols}
	/>
	{#if bodyVisible}
		<Body cardId={node.id} {colorShade} />
	{/if}
	<!-- DROPZONE -->
	{#if node.hasOwnProperty('items')}
		<section
			use:dndzone={{ items: node.items, flipDurationMs, centreDraggedOnCursor: true }}
			on:consider={(e) => handleDndConsider(e, changeState)}
			on:finalize={(e) => handleDndFinalize(e)}
			class={dragZoneStyle}
		>
			<!-- WE FILTER THE SHADOW PLACEHOLDER THAT WAS ADDED IN VERSION 0.7.4, filtering this way rather than checking whether 'nodes' have the id became possible in version 0.9.1 -->
			{#each node.items.filter((item) => item.id !== SHADOW_PLACEHOLDER_ITEM_ID) as item (item.id)}
				<div animate:flip={{ duration: flipDurationMs }} class="item rounded-md p-1 ">
					<svelte:self node={$nodes[item.id]} colorShade={colorShade + 1} />
				</div>
			{/each}
			<Add cardId={node.id} {addRecord} />
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
	article {
		min-width: 300px;
	}
</style>
