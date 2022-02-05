<script>
	import { flip } from 'svelte/animate';
	import { dndzone, SHADOW_PLACEHOLDER_ITEM_ID } from 'svelte-dnd-action';
	import Header from './Header.svelte';
	import Body from './Body.svelte'
	import { getParentId } from './stores/tools';
	import Add from './furniture/buttons/Add.svelte'
	import { v4 as uuidv4 } from 'uuid';
	


	export let nodes;
	export let node;
	export let colorShade;

	// let node = $cardLayout[cardId]

	let bodyVisible = false
	let editUrl = false

	const flipDurationMs = 300;
	
	
	function handleDndConsider(e) {
		node.items = e.detail.items;
	}
	function handleDndFinalize(e) {
		node.items = e.detail.items;
		nodes = { ...nodes };
	}
	const  removeRecord= (cardId) =>{
		// alert('no more alerts')
		console.log('remove Record running....')
		// 1. remove card from items
		const parentId = getParentId(cardId);
		const items = nodes[parentId].items;
		const getIndex = () => {
			for (let i = 0; i < items.length; i++) {
				console.log('LOOP:', items[i]);
				if (items[i].id == cardId) {
					return i;
				}
			}
			};
		const cardIndex = getIndex(cardId);
		nodes[parentId].items.splice(cardIndex, 1);
		//2. remove card from nodes
		nodes[cardId].items.splice(cardIndex, 1);
		nodes = { ...nodes };
	}
	const addRecord = (cardId) =>{
		console.log('add record running.........', cardId)
		// nodes[cardId].items.
		const newId = uuidv4()
		const newItem={'id':newId,'items':[]}
		const newCard = 	
		{
			newId: {
					componentId: newId,
					url: 'd',
					allTags: [],
					usersVersion: {
						userId: { userId: userId, versionId: 1 },
					},
					versions: {
						1: {
							title: '',
							imageUrl:'',
							notes: ''
							}
								}
					},
				}

			}
	//layout template
	var layout = '';
	if (node.id == 1) {
		layout = 'flex flex-col flex-wrap';
	}
	
	let dragzoneStyle 
	dragzoneStyle  =  "p-2 rounded-md  bg-blue-" + colorShade

</script>
<article class={dragzoneStyle}>
	{node.id}
	<Header cardId={node.id} bind:bodyVisible={bodyVisible} bind:editUrl={editUrl} colorShade={colorShade} 
	removeRecord={removeRecord} />
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
			<Add cardId={node.id} addRecord={addRecord}/>
		</section>
	{/if}
</article>
<div class="bg-blue-900"></div>
<style>
	section {
		width: auto;
		border: 0px solid black;
		/* this will allow the dragged element to scroll the list */
		overflow-y: auto;
		height: auto;
	}

</style>
