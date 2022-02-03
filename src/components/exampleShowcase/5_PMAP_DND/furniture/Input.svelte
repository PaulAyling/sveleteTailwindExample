<script>
	export let title;
	export let url;
</script>

<input
	class="text-blue-100 rounded p-1 w-full text-zinc-100 flex-grow  bg-blue-400 "
	type="text"
	id="fname"
	name="firstname"
    bind:value={title}
	placeholder="Url Description"
/>


