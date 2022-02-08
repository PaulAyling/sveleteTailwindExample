<script>
	export let bodyVisible;
	import Fa from 'svelte-fa';
	import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

	const toggle = () => {
		bodyVisible = !bodyVisible;
	};
</script>

<button on:click={toggle} class="p-1 text-blue-200">
	<Fa icon={bodyVisible ? faSortDown : faSortUp} class="ml-2 mr-1 " />
</button>
