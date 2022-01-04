<script>
    import {flowers} from './myStore'
    import Card from '../../layout/card.svelte'
    import Child from './child.svelte'
    import InputBox from '../../layout/input.svelte' 

    const loopArr = []

    flowers.subscribe(value => {
		console.log('Store value:', value)
	});
</script>
<h1>Read a custom store with a dictionary data format </h1>
<h2>with a more complex store</h2>
<div>
    {$flowers['1'].id}
    {$flowers['1'].title}
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