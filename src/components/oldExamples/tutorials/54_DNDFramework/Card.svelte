<script>
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
    export let items;
    const flipDurationMs = 300;


	function handleDndConsider(e) {
		console.log('e-consider:BEFORE.items', items)
		items = e.detail.items;
		console.log('e-consider:AFTER.items', items)
        // console.log('e-consider:',e.detail)
		
	}
	function handleDndFinalize(e) {
		console.log('e-finalize:BEFORE.items', items)
		items = e.detail.items;
		console.log('e-finalize:AFTER.items', items)
		// console.log('e-finalize:',e.detail)
	}


</script>

<style>
	section {
		width: 50%;
		padding: 0.3em;
		border: 1px solid black;
		overflow: scroll;
		
	}
	div {
		width: 50%;
		padding: 0.2em;
		border: 1px solid blue;
		margin: 0.15em 0;
	}
</style>
<section class="h-96 bg-blue-200" use:dndzone={{items, flipDurationMs}} on:consider={handleDndConsider} on:finalize={handleDndFinalize}>
	{#each items as item(item.id)}
		<div animate:flip="{{duration: flipDurationMs}}">
			{item.name}	
		</div>
	{/each}
</section>