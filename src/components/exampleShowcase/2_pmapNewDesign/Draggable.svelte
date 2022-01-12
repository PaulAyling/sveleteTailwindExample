<script>
    export let hoveringOverCard
    export let childArr
    export let parentIndex
    export let dndData
    import {flip} from 'svelte/animate';
    console.log('nnnnhoveringOverCard',hoveringOverCard)
    console.log('dndData',dndData)
    
</script>

{#each childArr as child, childIx (child)}
    <div animate:flip  >
    <ul
        class:hovering={hoveringOverCard === child.name}
        on:dragenter={() => hoveringOverCard = child.name}
        on:dragleave={() => hoveringOverCard = null}
        on:drop={event => dndData.functions.drop(event, childIx)}
        ondragover="return false"
        class="bg-blue-200">
            <slot/>  
        </ul>
    </div>
{/each}
<style>
	.hovering {
		border-color: orange;
	}

	li:hover {
		background: orange;
		color: white;
	}
  ul {
		border: solid lightgray 1px;
		display: flex; /* required for drag & drop to work when .item display is inline */
		height: 40px; /* needed when empty */
		padding: 10px;
	}
</style>