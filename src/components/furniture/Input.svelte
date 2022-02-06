<script>
	export let inputText;
	export let inputPlaceholder
	export let colorShade

	let style 
	// colorShade/100%2 == 0 ? style  =  "text-blue-100 rounded p-1 w-full text-zinc-100 flex-grow  bg-blue-400" : style  =  "text-blue-100 rounded p-1 w-full text-zinc-100 flex-grow  bg-blue-500"
	style = "text-blue-100 rounded p-1 w-full flex-grow level"+colorShade

</script>
<input
	class={style}
	type="text"
	id="fname"
	name="firstname"
    bind:value={inputText}
	placeholder={inputPlaceholder}
/>

<style>
.level0{
	background:#1E3A8A;
}
.level5{
	background:#1D4ED8;
}
.level10{
	background:#3B82F6
}
.level15{
	background:#60A5FA;
}
.level20{
	background:#EA580C;
}
.level25{
	background:#F97316;
}
.level30{
	background:#FB923C
}
.level35{
	background:#FDBA74;
}
</style>
