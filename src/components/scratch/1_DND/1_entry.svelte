<script>
    import {dragStart} from './module'
    import {cardMap} from './store'
    import Document from './document.svelte';
    cardMap.subscribe(value => {
		console.log(value)
	})
    // EDIT STORE
    function drop(event, basketIndex) {
		event.preventDefault();
   		const json = event.dataTransfer.getData("text/plain");
		const data = JSON.parse(json);
		const [item] = baskets[data.basketIndex].items.splice(data.itemIndex, 1);
		baskets[basketIndex].items.push(item);
		baskets = baskets;
		hoveringOverBasket = null;
	}

</script>

<h1>buiding the DND ffom scatch for small hierachy</h1>
<Document id=1/>