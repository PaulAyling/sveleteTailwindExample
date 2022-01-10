<script>
	// Inspired by https://svelte.dev/repl/810b0f1e16ac4bbd8af8ba25d5e0deff?version=3.4.2.
	import {flip} from 'svelte/animate';
    import {bigBaskets} from './store'
    let hoveringOverBasket;
	bigBaskets.subscribe(value => {
        	console.log('Store Components:', value)
        });

	// FUNCTIONS TO MANUPULATE THE ITEMS (with side effects (cannot move)))
	function dragStart(event, basketIndex, itemIndex) {
		const data = {basketIndex, itemIndex};
		event.dataTransfer.setData('text/plain', JSON.stringify(data));
	}
	function drop(event, basketIndex) {
		event.preventDefault();
    const json = event.dataTransfer.getData("text/plain");
		const data = JSON.parse(json);
		const [item] = $bigBaskets[data.basketIndex].children.splice(data.itemIndex, 1);
    // Add the item to the drop target basket.
		$bigBaskets[basketIndex].children.push(item);
		$bigBaskets = $bigBaskets;
		hoveringOverBasket = null;
	}
    let cnt = 0
</script>
<p>Get the drag and drop working with the tree structure for my pondermap</p>
{#each $bigBaskets as book, bookIndex (book)}
  <div animate:flip  >
    <b>{book.id}</b>  
    <ul
	  	class:hovering={hoveringOverBasket === book.id}
	    on:dragenter={() => hoveringOverBasket = book.id}
      on:dragleave={() => hoveringOverBasket = null}
  		on:drop={event => drop(event, bookIndex)}
  		ondragover="return false"
          class="bg-blue-200">

          {#each book.children as chapter, chapterIndex (chapter)}
          <div class="item" animate:flip>
	      	<li
	    	    draggable={true}
		  		  on:dragstart={event => dragStart(event, bookIndex, chapterIndex)}
		    	class="">
				chapter
                {chapter.id}
				<ul
					class:hovering={hoveringOverBasket === chapter.id}
				on:dragenter={() => hoveringOverBasket = chapter.id}
				on:dragleave={() => hoveringOverBasket = null}
					on:drop={event => drop(event, chapterIndex)}
					ondragover="return false"
					class="bg-blue-200">

					{#each chapter.children as page, pageIndex (page)}
					<div class="item" animate:flip>
						<li
						  draggable={true}
							  on:dragstart={event => dragStart(event, chapterIndex, pageIndex)}
						  class="">
						  page
						  {page.id}
						</li>
						</div>
				  {/each}
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