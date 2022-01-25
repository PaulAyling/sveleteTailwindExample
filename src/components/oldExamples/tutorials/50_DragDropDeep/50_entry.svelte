<script>
	import Draggable from './Draggable.svelte'	
	import {cardLayout, pointerOverCard} from './store.js'
	import {add, remove} from './utilities.js'

// 	const startingId = $cardLayout[1].apexCardId
const startingId = 0 // until I figure out how to do this in the store

 cardLayout.subscribe(value => {
		console.log('STORE:',value )
	})
</script>
<h1>
	Based on DRAGDROP.svelte with different data
</h1>


<Draggable 
cardId={startingId} 
bind:pointerOverCard={$pointerOverCard}  						bind:cardLayout={$cardLayout} />

<button class="delete" on:click={() => remove(3,0)}>
	Delete
</button>


<button class="add" on:click={() => add(2,9)}>
	Add
</button>



<style>
	h1{
		text-transform: uppercase;
		font-size:1em
	}
	.delete{
		background:red;
	}
</style>
