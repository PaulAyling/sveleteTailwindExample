<script>
    export let title
    export let imageUrl
    export let notes
    export let childrenIds
    import CardEntry from '../13_stylingComponent/13_entry.svelte'
    console.log('childrenIds',childrenIds)

</script>
    <div>
        <img src={imageUrl} alt={title}/>
        {notes}
        {#each childrenIds as childId}
                <CardEntry componentId={childId}/>    
            {childId}
        {/each}
    </div>