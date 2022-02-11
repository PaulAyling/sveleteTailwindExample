<script>
    export let cols
    export let toggleCols
    import Fa from 'svelte-fa';
	import { faColumns, faAlignJustify } from '@fortawesome/free-solid-svg-icons';


</script>
<button  on:click={toggleCols} class="p-1 text-gray-300 cursor-auto">
    <Fa icon={cols? faColumns :faAlignJustify } class="ml-1 mr-1  text-blue-200" />
</button>   