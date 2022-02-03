<script>
    export let bodyVisible 
    import BodyVisible from './bodyVisible.svelte';
    import Remove from './Remove.svelte'
    import ShowUrl from './showUrl.svelte';
</script>
<nav class="flex flex-row">
    <Remove />
    <ShowUrl/>
    <BodyVisible bind:bodyVisible={bodyVisible}/>
</nav>  