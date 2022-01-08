<script>
    export let id
    import {baskets} from '../../../stores'

    const currentArray = $baskets[id]

</script>
    {#each $loopArray as basket, basketIndex (basket)}
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
