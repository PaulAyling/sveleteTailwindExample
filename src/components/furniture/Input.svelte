<script>
	export let inputText;
	export let inputPlaceholder
	export let colorShade

	const style = "inputText rounded p-1 w-full flex-grow level"+colorShade

</script>
<input
	class={"text-blue-100 placeholder:text-green-400 rounded p-1 w-full flex-grow level"+colorShade}
	type="text"
	id="fname"
	name="firstname"
    bind:value={inputText}
	placeholder={inputPlaceholder}
/>
<style>
	.inputText{
		color:red;
	}
</style>