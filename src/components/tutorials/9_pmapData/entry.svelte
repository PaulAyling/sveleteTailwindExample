<script>
    import {components} from './myStore'
    // import Card from '../../layout/card.svelte'
    // import Child from './child.svelte'
    // import InputBox from '../../layout/input.svelte' 

    const currentViewId = 1

    components.subscribe(value => {
		console.log('Store value:', value[currentViewId])
	});
</script>
<h1>Read a custom store database data format </h1>
<h2>Showing the entire store in the origonal format</h2>

<div>
    {$components['1'].id}
    <!-- <div class='bg-green-100 p-4'>
        <h1>Loop store contents</h1>
        <p>This shows a store being loaded in and used and modified </p>
        <p>As the store is modified the updated store is ouptutted to console</p>
    </div>
    <ul>
        {#each $flowers as flower}
        <Card>
            <li> {flower.title}</li> 
        </Card>
        <InputBox bind:title={flower.title}/>
        {/each}

    </ul>
    <Child/> -->
</div>