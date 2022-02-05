<script>
    export let bodyVisible 
    export let editUrl
    export let cardId
    export let  removeRecord
    import BodyVisible from './bodyVisible.svelte';
    import Remove from './Remove.svelte'
    import ShowUrl from './EditUrl.svelte';
</script>
<nav class="flex flex-row">
    <Remove cardId={cardId}  removeRecord={removeRecord}/>
    <ShowUrl bind:editUrl={editUrl}/>
    <BodyVisible bind:bodyVisible={bodyVisible}/>
</nav>  