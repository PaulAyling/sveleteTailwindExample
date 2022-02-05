<script>
	export let inputText;
	export let inputPlaceholder
	export let colorShade
	
	var textCol
	colorShade < 500 ? textCol = "text-blue-800" : textCol = "text-blue-100"	
	let style 
	// colorShade/100%2 == 0 ? style  =  "text-blue-100 rounded p-1 w-full text-zinc-100 flex-grow  bg-blue-400" : style  =  "text-blue-100 rounded p-1 w-full text-zinc-100 flex-grow  bg-blue-500"
	style = textCol+" rounded p-1 w-full flex-grow  bg-blue-"+colorShade

</script>
<input
	class={style}
	type="text"
	id="fname"
	name="firstname"
    bind:value={inputText}
	placeholder={inputPlaceholder}
/>


