<script>
    import { flowers } from "../stores";
    console.log($flowers)
 
</script>

<div>
    <h1>Loop store contents</h1>
    {#each $flowers as flower}
    record
    <li> {flower.id}</li> 
    {/each}

</div>
