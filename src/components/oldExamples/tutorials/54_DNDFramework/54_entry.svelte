<script>
	import Card from './Card.svelte';
	// import { items } from './store'

	// export const items = [
	// 	{ id: 1, name: 'item 1', children: [] },
	// 	{ id: 2, name: 'item 2', children: [] },
	// 	{ id: 3, name: 'item 3', children: [] }
	// ];

	const items = {
    0:{'id':0,'children':[1,2,3]},
    1:{'id':1,'children':[]},
    2:{'id':2,'children':[]},
    3:{'id':3,'children':[]},
    }
	

</script>

<Card {items} />

<style>
	:global(*) {
		box-sizing: border-box;
		margin: 0;
	}
</style>
