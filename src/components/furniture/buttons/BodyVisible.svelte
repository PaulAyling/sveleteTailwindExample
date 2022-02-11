<script>
	export let bodyVisible;
	import Fa from 'svelte-fa';
	import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

	const toggle = () => {
		bodyVisible = !bodyVisible;
	};
</script>

<button on:click={toggle} class="p-1 text-blue-200 cursor-auto">
	<Fa icon={bodyVisible ? faSortDown : faSortUp} class="ml-1 mr-1 " />
</button>

<style>
	button:hover{

	color:#F87171;
  }
</style>
