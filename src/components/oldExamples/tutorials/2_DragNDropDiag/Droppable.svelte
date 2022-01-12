<script>
    export let arr
    export let dragStart
    export let basketIndex
    import {flip} from 'svelte/animate';

    console.log('DROPPABLE',arr )
</script>

{#each arr as item, itemIndex (item)}
	<div class="item" animate:flip>
		<li
			draggable={true}
			on:dragstart={(event) => dragStart(event, basketIndex, itemIndex)}
			class=""
		>
            <!-- <slot item={item}/> -->
        {item}
		</li>
	</div>
{/each}

<style>
	.hovering {
		border-color: orange;
	}
	.item {
		display: inline; /* required for flip to work */

	}
	li {
		background-color: lightcoral;
        padding:0 3px 0 3px;
		cursor: pointer;
		display: inline-block;
		margin-right: 10px;
        border-radius: 3px;
		
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
