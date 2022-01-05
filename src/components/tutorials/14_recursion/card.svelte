<script>
    export let id
    export let data
    import CardBody from '../14_recursion/cardBody.svelte'

    const childrenIds = data[id].children

</script>
    <article class="rounded-md bg-red-500 text-white p-4"> 
        <h1 class="text-xl uppercase">This is the card component</h1>
        <CardBody childrenIds={childrenIds} data={data}/>
        

    </article>
    