<script>
    import {store} from './store'
    import Child from './child.svelte'
    const startingId = 1
    $:storeSubset = $store[0]
    store.subscribe(value => {
		console.log($store)
	})
</script>
    <h1>Modifying a subset of store with bound child component</h1>
    <Child bind:listArr={storeSubset}/>
