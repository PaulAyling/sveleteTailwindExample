<script>
    export let title
    export let imageUrl
    export let notes
    export let childrenIds
    import CardEntry from '../'

</script>
    <div>
        <img src={imageUrl} alt={title}/>
        {#each childrenIds as childId}

    </div>