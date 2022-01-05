<script>
    export let id
    export let data
    import CardBody from '../15_recursionPmap/cardBody.svelte'

    const childrenIds = data[id].children

</script>
    <article class="rounded-md bg-lime-600 text-white p-4"> 
        <h1 class="text-xl uppercase">This is the card component for ID:{id}</h1>
        <CardBody childrenIds={childrenIds} data={data}/>
        

    </article>
    