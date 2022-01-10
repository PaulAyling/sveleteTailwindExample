<script>
    export let arr
    console.log('child prop', arr)
</script>

<div class="bg-red-400 p-1 rounded-md ">
    <input class="p-1 bg-gray-200 w-full rounded-md" bind:value={arr} placeholder="enter your name">
 </div>
 <h1>{arr}</h1>