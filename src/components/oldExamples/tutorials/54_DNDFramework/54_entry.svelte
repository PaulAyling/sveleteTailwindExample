<script>
	import Board from './Board.svelte';
	import {trello} from './store'
		

</script>

<Board columnItems={trello}></Board>


<style>
	:global(*) {
		box-sizing: border-box;
		margin: 0;
	}
</style>

