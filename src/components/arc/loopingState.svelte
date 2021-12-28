<script>
    // This shows state in use together with a component and slot to format content
    import { flowers } from "../../stores";
    import Card from './layout/card.svelte'
    import InputBox from './inputBox.svelte' 
    import Ddrop from './dDrop.svelte'
</script>

<div>
    <div class='bg-green-100 p-4'>
        <h1>Loop store contents</h1>

    </div>
    <ul>
        {#each $flowers as flower}
        <Card>
            <li> {flower.title}</li> 
        </Card>
        <InputBox bind:title={flower.title}/>
        {/each}

    </ul>

</div>
<Ddrop/>
<style>
    h1{
        font-size: 3em;
    }
</style>