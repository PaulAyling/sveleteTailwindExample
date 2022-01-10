<script>
	// Inspired by https://svelte.dev/repl/810b0f1e16ac4bbd8af8ba25d5e0deff?version=3.4.2.
	import {flip} from 'svelte/animate';
    import {baskets} from '../../../../../stores'
	import {dragStart} from './dragFunctions'
	import Droppable from './Droppable.svelte'
	// FUNCTIONS TO MANUPULATE THE ITEMS (with side effects (cannot move)))
	
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
	let hoveringOverBasket;
    let cnt = 0
	const startingId = 1

</script>
{#each $baskets as basket, basketIndex (basket)}
  <div animate:flip  >
    <b>{basket.name}</b>  
    <ul
	  	class:hovering={hoveringOverBasket === basket.name}
	    on:dragenter={() => hoveringOverBasket = basket.name}
      on:dragleave={() => hoveringOverBasket = null}
  		on:drop={event => drop(event, basketIndex)}
  		ondragover="return false"
          class="bg-blue-200">
          {#each basket.items as item, itemIndex (item)}
          <div class="item" animate:flip>
	      	<li
	    	    draggable={true}
		  		  on:dragstart={event => dragStart(event, basketIndex, itemIndex)}
		    	class="">
                {item}
	    	  </li>
			  </div>
	    {/each}
    </ul>
  </div>
{/each}
<Droppable id = {startingId}/>

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