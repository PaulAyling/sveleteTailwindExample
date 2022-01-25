<script>
    export let id
    export let data

</script>

{#each data[id].child as thing}
    {data[0]}

{/each}