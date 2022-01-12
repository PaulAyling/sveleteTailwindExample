<script>
    export let hoveringOverBasket
    export let baskets
    export let dragStart
    export let drop
    import {flip} from 'svelte/animate';
    console.log()

</script>
{#each baskets as basket, basketIndex (basket)}
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
				  <!-- {console.log('item:',item,'itemIndex:',itemIndex)} -->
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