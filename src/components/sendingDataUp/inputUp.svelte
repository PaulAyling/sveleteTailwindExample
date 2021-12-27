<script>
    export let title
</script>


<div class="bg-gray-400 p-4 m-2 rounded-md">
    <p>A demonstation off sending input up via props</p>
    <h1 class="pb-2">Please Enter a new title here</h1>
    <input class="p-1 bg-gray-200 w-full" bind:value={title} placeholder="enter your name">
</div>