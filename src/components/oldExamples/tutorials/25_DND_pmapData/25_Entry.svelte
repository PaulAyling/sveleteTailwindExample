<script>
	import {flip} from 'svelte/animate';
    import {baskets} from '../../../stores'
	import {componentMap} from './store'
	import Card from './card.svelte'
	import Links from './links.svelte' 
	//view Store
	// componentMap.subscribe(value => {
	// 	console.log('New Store:',$componentMap)
	// })
	// baskets.subscribe(value => {
	// 	console.log('OLD Store:',$baskets)
	// })

// id = name
// children = items
	//DND functions
	function dragStart(event, basketIndex, itemIndex) {
		const data = {basketIndex, itemIndex};
		event.dataTransfer.setData('text/plain', JSON.stringify(data));
	}
	function drop(event, basketIndex) {
		event.preventDefault();
		const json = event.dataTransfer.getData("text/plain");
		const data = JSON.parse(json);
		const [item] = $componentMap[data.basketIndex].items.splice(data.itemIndex, 1);
		// Add the item to the drop target basket.
		$componentMap[basketIndex].items.push(item);
		$componentMap = $componentMap;
		hoveringOverBasket = null;
	}
	//initialiation variables
	let hoveringOverBasket;
    let cnt = 0
	// Create a neat pack of data for props
	const dndData={
		'functions':{
			'drop':drop,
			'dragStart':dragStart
		},
		'hoveringOverBasket':hoveringOverBasket
	}
</script>
	<p>put pmap data into the dnd interface</p>
<Card  parentIndex='2' childrenArr={$componentMap}  dndData={dndData}/>
