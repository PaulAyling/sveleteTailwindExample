<script>
	import {flip} from 'svelte/animate';
    import {baskets} from '../../../stores'
	import Card from './card.svelte'
	import Links from './links.svelte' 
	//DND functions
	function dragStart(event, basketIndex, itemIndex) {
		const data = {basketIndex, itemIndex};
		event.dataTransfer.setData('text/plain', JSON.stringify(data));
	}
	function drop(event, basketIndex) {
		event.preventDefault();
		const json = event.dataTransfer.getData("text/plain");
		const data = JSON.parse(json);
		const [item] = $baskets[data.basketIndex].items.splice(data.itemIndex, 1);
		// Add the item to the drop target basket.
		$baskets[basketIndex].items.push(item);
		$baskets = $baskets;
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
	<p>The aim of this is to take the dnd interface and split it into components so it can be used for the next step</p>
	<Card  parentIndex='2' childrenArr={$baskets}  dndData={dndData}/>
