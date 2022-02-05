<script>
	import { flip } from 'svelte/animate';
	import { dndzone, SHADOW_PLACEHOLDER_ITEM_ID } from 'svelte-dnd-action';
	import Header from './Header.svelte';
	import Body from './Body.svelte'

	export let nodes;
	export let node;
	export let colorShade;


	let bodyVisible = false
	let editUrl = false

	const flipDurationMs = 300;
	
	//DND FUCTIONS
	function handleDndConsider(e) {
		console.log('handleDndConsider: node.items',node.items,'e.detail.items:',e.detail.items)
		node.items = e.detail.items;
	}
	function handleDndFinalize(e) {
		node.items = e.detail.items;
		console.log('handleDndFinalize: node.items',node.items,'e.detail.items:',e.detail.items)
		nodes = { ...nodes };
	}
	


	var layout = '';
	if (node.id == 1) {
		layout = 'flex flex-col flex-wrap';
	}
	
	let dragzoneStyle 
	dragzoneStyle  =  "p-2 rounded-md  bg-blue-" + colorShade

</script>
<article class={dragzoneStyle}>
	<Header cardId={node.id} bind:bodyVisible={bodyVisible} bind:editUrl={editUrl} colorShade={colorShade} />
	{#if bodyVisible}
	<Body cardId = {node.id} colorShade={colorShade} />
	{/if}
	<!-- DROPZONE -->
	{#if node.hasOwnProperty('items')}
		<section
			use:dndzone={{ items: node.items, flipDurationMs, centreDraggedOnCursor: true }}
			on:consider={handleDndConsider}
			on:finalize={handleDndFinalize}
			class={layout + " rounded-md  bg-green-400"}
		>
			<!-- WE FILTER THE SHADOW PLACEHOLDER THAT WAS ADDED IN VERSION 0.7.4, filtering this way rather than checking whether 'nodes' have the id became possible in version 0.9.1 -->
			{#each node.items.filter((item) => item.id !== SHADOW_PLACEHOLDER_ITEM_ID) as item (item.id)}
				<div animate:flip={{ duration: flipDurationMs }} class="item rounded-md p-1 ">
					<svelte:self bind:nodes node={nodes[item.id]} colorShade={colorShade-200} />
				</div>
			{/each}
			<div class="pl-1">+</div>
		</section>
	{/if}
</article>
<!-- <div class="w-24 h-24 bg-blue-900">

</div> -->

<style>
	section {
		width: auto;
		border: 0px solid black;
		/* this will allow the dragged element to scroll the list */
		overflow-y: auto;
		height: auto;
	}

</style>
