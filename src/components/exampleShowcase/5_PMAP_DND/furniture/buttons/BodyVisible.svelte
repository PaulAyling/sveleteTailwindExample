<script>
    export let bodyVisible
    const toggle=() =>{
	bodyVisible = !bodyVisible
}
</script>
<button  on:click={toggle} class="p-1">
	^
</button>   