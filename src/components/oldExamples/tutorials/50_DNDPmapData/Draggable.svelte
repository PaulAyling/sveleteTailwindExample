<script>
    export let childrenIds
    console.log('child prop', childrenIds)
</script>

<div class="bg-red-400 p-1 rounded-md ">
    <input class="p-1 bg-gray-200 w-full rounded-md" bind:value={childrenIds} placeholder="enter your name">
 </div>
 <h1>{childrenIds}</h1>