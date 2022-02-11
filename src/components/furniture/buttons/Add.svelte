<script>
	export let addRecord;
	export let cardId;
	import Fa from 'svelte-fa';
	import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="flex flex-row w-800 pl-3">
	<button on:click={() => addRecord(cardId)} class="hover:text-red-400 hover:text-xl text-gray-300 text-left cursor-pointer">
		<Fa  icon={faPlusCircle} />
	</button>
	<div class=" p-4 text-center text-white  h-6 w-6 flex-grow rounded-md"></div>
</div>
