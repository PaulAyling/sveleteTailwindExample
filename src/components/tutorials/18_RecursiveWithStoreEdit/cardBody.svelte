<script>
    export let cardData
    export let map
    export let components
    export let authenticatedUser
    import Card from '../18_RecursiveWithStoreEdit/card.svelte'
    const   testId = 1
</script>
    <div class="border-md rounded-md bg-blue-300 p-2">
        <img class="w-100" src={cardData.imageUrl} alt="">
        <p>{cardData.notes}</p>
        
        <!-- <Card id={testId} map={map} /> -->
        {#each cardData.childrenIds as childId}
        <Card id={childId} map={map} components={components}  authenticatedUser={authenticatedUser}//>
        {/each}
    </div>