<script>
     export let name
</script>

<div class="bg-red-400 p-4 m-2 rounded-md">
    <h1 class="pb-2">Please Enter a new state info here</h1>
    <input class="p-1 bg-gray-200 w-full" bind:value={name} placeholder="enter your name">
</div>
<style>
 .card {
    background-color: #fff;
    color: #333;
    border-radius: 15px;
    padding: 40px 50px;
    margin: 20px 0;
    position: relative;
  }   
  h3{
      font-size: 1em;
  }
</style>

