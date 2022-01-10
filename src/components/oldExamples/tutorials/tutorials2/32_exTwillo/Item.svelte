<script>
    export let item
    import AddItem from './AddItem.svelte'
</script>
<div class="item">
    <h1>{item}</h1>
    <AddItem item={item}/>
</div>
<style>
    .item{
        width:25%;
    }
</style>