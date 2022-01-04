<script>
    import {flowers} from './myStore'
    import Card from '../../layout/card.svelte'
    import Child from './child.svelte'
    import InputBox from '../../layout/input.svelte' 

    

    flowers.subscribe(value => {
		console.log('Store value:', value)
	});
</script>
<h1>An example showing read/write on a custom store in a custom location</h1>
<div>
    <div class='bg-green-100 p-4'>
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
    <Child/>
</div>