<script>
	// Inspired by https://svelte.dev/repl/810b0f1e16ac4bbd8af8ba25d5e0deff?version=3.4.2.
	import {flip} from 'svelte/animate';
	import {dragStart} from './modules'
	import {storeData} from './store'

	storeData.subscribe(value => {
		console.log($storeData)
	})
	
	let hoveringOverBasket;
	//Update Store
	function drop(event, basketIndex) {
		event.preventDefault();
    	const json = event.dataTransfer.getData("text/plain");
		const data = JSON.parse(json);
		// Remove the item from one basket.
		// Splice returns an array of the deleted elements, just one in this case.
			const [item] = $storeData[data.basketIndex].items.splice(data.itemIndex, 1);
    	// Add the item to the drop target basket.
			$storeData[basketIndex].items.push(item);
			$storeData = $storeData;
			hoveringOverBasket = null;
		}
</script>
<p>Make both levels draggable</p>
{#each $storeData as basket, basketIndex (basket)}
  <div animate:flip>
    <b>{basket.name}</b>
    <ul
	  	class:hovering={hoveringOverBasket === basket.name}
	    on:dragenter={() => hoveringOverBasket = basket.name}
      on:dragleave={() => hoveringOverBasket = null}
  		on:drop={event => drop(event, basketIndex)}
  		ondragover="return false"
    >
	    {#each basket.items as item, itemIndex (item)}
			  <div class="item" animate:flip>
	      	<li
	    	    draggable={true}
		  		  on:dragstart={event => dragStart(event, basketIndex, itemIndex)}
		    	>
		      	{item}
	    	  </li>
			  </div>
	    {/each}
    </ul>
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
		background-color: lightgray;
		cursor: pointer;
		display: inline-block;
		margin-right: 10px;
		padding: 10px;
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