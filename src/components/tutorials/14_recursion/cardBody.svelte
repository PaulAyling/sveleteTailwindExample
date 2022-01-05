<script>
    export let childrenIds
    export let data
    import Card from '../14_recursion/card.svelte'
</script>
    <div class="border-md rounded-md bg-blue-300 p-2">
        <h3>The Body section</h3>
        <p>Ids in section are: {childrenIds}</p>
        {#each childrenIds as childId}
        {childId}
        <Card id={childId} data={data}/>
        {/each}
    </div>