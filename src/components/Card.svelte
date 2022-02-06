<script>
	import { flip } from 'svelte/animate';
	import { dndzone, SHADOW_PLACEHOLDER_ITEM_ID } from 'svelte-dnd-action';
	import Header from './Header.svelte';
	import Body from './Body.svelte'
	import { getParentId } from './stores/tools';
	import Add from './furniture/buttons/Add.svelte'

	import {cards} from './stores/cards'
	import {authenticatedUser} from './stores/authenticatedUser'
	import { v4 as uuidv4 } from 'uuid';
import Alert from './furniture/alert.svelte';

	export let nodes;
	export let node;
	export let colorShade;

	// let node = $cardLayout[cardId]


	
	
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
		// console.log('add record running.........', cardId)
		// 1. Create new id {using the bottom id - this will have to use newId later}
		const newId = nodes[Object.keys(nodes)[Object.keys(nodes).length - 1]].id +1
		console.log('newId',newId)
		// 2. Add newRecord to nodes
		nodes[cardId].items.push( {'id':newId})
		const newNode = {'id':newId,'items':[]}
		nodes = {...nodes, [newId]:newNode}
		// console.log('nodes!!',nodes)
		// 3. Add new card to cards
		const newItem={'id':newId,'items':[]}
		const newCard = 	
				{
					componentId: newId,
					url: 'd',
					allTags: [],
					usersVersion: {
						userId: { userId: $authenticatedUser.userId, versionId: 1 },
					},
					versions: {
						1: {
							title: '',
							imageUrl:'',
							notes: ''
							}
								}
				}
				

		console.log('newCard',newCard)
		cards.update((val) => {
		val = {...val, [newId]:newCard}
		return val;
	});
	nodes = {...nodes}
}	
	//FORMATTING / CONFIG 

	let bodyVisible = false
	let editUrl = false

	const flipDurationMs = 300;
	var layout = '';
	if (node.id == 1) {
		layout = 'flex flex-col flex-wrap';
	}
	
	let dragzoneStyle 
	dragzoneStyle  =  "p-2 rounded-md  level" + String(colorShade)

</script>

	<article class={dragzoneStyle}>
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
						<svelte:self bind:nodes node={nodes[item.id]} colorShade={colorShade+5} />
					</div>
				{/each}
				<Add cardId={node.id} addRecord={addRecord}/>
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
		.level0{
			background:#1E3A8A;
		}
		.level5{
			background:#1D4ED8;
		}
		.level10{
			background:#3B82F6
		}
		.level15{
			background:#60A5FA;
		}
		.level20{
			background:#EA580C;
		}
		.level25{
			background:#F97316;
		}
		.level30{
			background:#FB923C
		}
		.level35{
			background:#FDBA74;
		}

	</style>
