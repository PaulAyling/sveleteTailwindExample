<script>
    // This shows state in use together with a component and slot to format content
    import { flowers } from "../../../stores";
    import Card from '../../layout/card.svelte'
    import InputBox from '../../layout/input.svelte' 
    import Child from './child.svelte'
    flowers.subscribe(value => {
		console.log($flowers)
	})
</script>
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