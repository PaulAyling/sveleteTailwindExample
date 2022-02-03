<script>
    export let bodyVisible 
    export let editUrl
    import BodyVisible from './bodyVisible.svelte';
    import Remove from './Remove.svelte'
    import ShowUrl from './EditUrl.svelte';
</script>
<nav class="flex flex-row">
    <Remove />
    <ShowUrl bind:editUrl={editUrl}/>
    <BodyVisible bind:bodyVisible={bodyVisible}/>
</nav>  