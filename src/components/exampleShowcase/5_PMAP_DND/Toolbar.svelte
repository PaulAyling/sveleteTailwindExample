<script>
    export let bodyVisible 
    import BodyVisible from './furniture/buttons/bodyVisible.svelte';
    import Remove from './furniture/buttons/Remove.svelte'
    import ShowUrl from './furniture/buttons/showUrl.svelte';
</script>
<nav class="flex flex-row">
    <Remove />
    <ShowUrl/>
    <BodyVisible bind:bodyVisible={bodyVisible}/>
</nav>  