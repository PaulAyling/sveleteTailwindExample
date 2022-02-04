<script>
	export let inputText;
	export let inputPlaceholder
	export let colorShade
	

	let style = "text-blue-100 rounded p-1 w-full text-zinc-100 flex-grow  bg-blue-400 "
	if(colorShade ==600){ style = "text-blue-100 rounded p-1 w-full text-zinc-100 flex-grow  bg-green-400 "}
</script>

<input
	class={style}
	type="text"
	id="fname"
	name="firstname"
    bind:value={inputText}
	placeholder={inputPlaceholder}
/>


