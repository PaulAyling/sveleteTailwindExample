<script>
	import Card from './Card.svelte'
	import DataFlow from './DataFlow.svelte'
	const startingId = 0;
</script>
ver 53
<Card parentId={startingId}/>
<!-- <DataFlow/> -->
<style>
	h1 {
		text-transform: uppercase;
		font-size: 1em;
	}
	.delete {
		background: red;
	}
</style>
