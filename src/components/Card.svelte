<script>
	import { flip } from 'svelte/animate';
	import { dndzone, SHADOW_PLACEHOLDER_ITEM_ID } from 'svelte-dnd-action';
	import Header from './Header.svelte';
	import Body from './Body.svelte';
	import Add from './furniture/buttons/Add.svelte';

	import { cards } from './stores/cards';
	import { authenticatedUser } from './stores/authenticatedUser';
	import { nodes } from './stores/cardLayout';

	// export let nodes;
	export let node;
	export let colorShade;
	// export let cardId;
	console.log('node',node.id)

	const handleDndConsider = (e) => {
		node.items = e.detail.items;
	};
	const handleDndFinalize = (e) => {
		nodes.update((val) => {
			val[node.id].items = node.items;
			return val;
		});
	};

	// function handleDndConsider(e) {
	// 	node.items = e.detail.items;
	// }
	// function handleDndFinalize(e) {
	// 	node.items = e.detail.items;
	// 	nodes = { ...nodes };
	// }
	const removeRecord = (cardId) => {
		const getParentId = (childId) => {
			const findId = (id, myarr) => {
				let res;
				for (let i = 0; i < myarr.length; i++) {
					if (myarr[i].id == id) return true;
				}
				return false;
			};
			for (const key in nodes) {
				let nodeArr = nodes[key].items;
				if (findId(childId, nodeArr) == true) {
					return key;
				}
			}
		};
		const parentId = getParentId(cardId);
		console.log('parentId', parentId);
		// alert('no more alerts')
		console.log('remove Record running....cardId:', cardId);
		// 1. remove card from items

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
	};
	const addRecord = (cardId) => {
		// console.log('add record running.........', cardId)
		// 1. Create new id {using the bottom id - this will have to use newId later}
		const newId = nodes[Object.keys(nodes)[Object.keys(nodes).length - 1]].id + 1;
		console.log('newId', newId);
		// 2. Add newRecord to nodes
		nodes[cardId].items.push({ id: newId });
		const newNode = { id: newId, items: [] };
		nodes = { ...nodes, [newId]: newNode };
		// console.log('nodes!!',nodes)
		// 3. Add new card to cards
		const newItem = { id: newId, items: [], cols: false };
		const newCard = {
			componentId: newId,
			url: 'd',
			allTags: [],
			usersVersion: {
				userId: { userId: $authenticatedUser.userId, versionId: 1 }
			},
			versions: {
				1: {
					title: '',
					imageUrl: '',
					notes: ''
				}
			}
		};
		cards.update((val) => {
			val = { ...val, [newId]: newCard };
			return val;
		});
		nodes = { ...nodes };
	};
	//FORMATTING / CONFIG

	let bodyVisible = false;
	let editUrl = false;

	const flipDurationMs = 300;

	const toggleCols = () => {
		console.log('toggleCols Running..');
		console.log('b', node.cols);
		node.cols = !node.cols;
		console.log('a', node.cols);
		node = { ...node };
	};

	let dragzoneStyle;
	dragzoneStyle = 'p-2 rounded-md  level' + String(colorShade);
</script>

<article class={dragzoneStyle}>
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
			on:consider={handleDndConsider}
			on:finalize={handleDndFinalize}
			class={node.cols
				? 'flex flex-row  rounded-md  bg-green-400'
				: 'flex flex-col rounded-md  bg-green-400'}
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
</style>

