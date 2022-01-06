<script>
    export let title
</script>

<div class="bg-red-400 p-1 m-1 rounded-md">
   <input class="p-1 bg-gray-200 w-full" bind:value={title} placeholder="enter your name">
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