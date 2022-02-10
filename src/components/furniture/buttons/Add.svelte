<script>
    export let addRecord
    export let cardId
    import Fa from 'svelte-fa';
	import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
</script>



<button  on:click={() => addRecord(cardId)} class="p-2 text-gray-300 text-left cursor-pointer">
    <Fa icon={faPlusCircle} />
</button>
