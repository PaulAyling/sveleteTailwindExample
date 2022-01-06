<script>
	// Inspired by https://svelte.dev/repl/810b0f1e16ac4bbd8af8ba25d5e0deff?version=3.4.2.
	import {flip} from 'svelte/animate';
    import {baskets} from '../../../stores'
	import Card from './card.svelte'
	import Links from './links.svelte' 
    let hoveringOverBasket;
	// FUNCTIONS TO MANUPULATE THE ITEMS (with side effects (cannot move)))
	function dragStart(event, basketIndex, itemIndex) {
		const data = {basketIndex, itemIndex};
		event.dataTransfer.setData('text/plain', JSON.stringify(data));
	}
	function drop(event, basketIndex) {
		event.preventDefault();
    const json = event.dataTransfer.getData("text/plain");
		const data = JSON.parse(json);
		const [item] = $baskets[data.basketIndex].items.splice(data.itemIndex, 1);
    // Add the item to the drop target basket.
		$baskets[basketIndex].items.push(item);
		$baskets = $baskets;
		hoveringOverBasket = null;
	}
    let cnt = 0
</script>
	<p>The aim of this is to take the dnd interface and split it into components so it can be used for the next step</p>
		<Card arr={$baskets} parentIndex={''} hoveringOverBasket={hoveringOverBasket} dragStart={dragStart} drop={drop}/>
			

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