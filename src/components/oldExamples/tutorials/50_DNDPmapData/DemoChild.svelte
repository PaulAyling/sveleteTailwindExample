<script>
    export let listArr
</script>
<h1>demo child</h1>
<div class="bg-red-400 p-1 rounded-md ">
    <input class="p-1 bg-gray-200 w-full rounded-md" bind:value={listArr.name} placeholder="enter your name">
    {listArr.name}
 </div>