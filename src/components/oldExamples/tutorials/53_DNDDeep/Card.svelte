<script>
	export let parentId;
	import { cardLayout, pointerOverCard } from './store';
	import { drop } from './utilities';
	import { dragStart } from './utilities.js';
	import { flip } from 'svelte/animate';
	const cardLabel = 'Card: ' + parentId;
	const dropZoneLabel = 'DropZone ' + parentId;
	pointerOverCard.subscribe((value) => {
		console.log('pointerOverCard:', value);
	});
    const textIx = 1
</script>

<article label={cardLabel} class="flex-col p-3 bg-gray-200 rounded-md">
	<div class="ml-3">Card: {parentId}</div>
	<body
		label={dropZoneLabel}
		class="bg-blue-500 flex-col p-3 rounded-md"
		class:hovering={$pointerOverCard === parentId}
		on:dragenter={() => ($pointerOverCard = parentId)}
		on:dragleave={() => ($pointerOverCard = parentId)}
		on:drop={(event) => drop(event, parentId, )}
		ondragover="return false"
	>
		<!-- Children of card -->
		{#each $cardLayout[parentId].children as childId, childIx (childId)}
			<div class="item" animate:flip>
				<div draggable={true} on:dragstart={(event) => dragStart(event, parentId, childIx)}>
					<div class="p-4 bg-red-400 m-2 rounded-md">{childId}</div>
				</div>
			</div>
		{/each}
	</body>
</article>
