<script>
    export let cardId
    import { remove } from '../../stores/functions/remove'
    import Fa from 'svelte-fa';
	import { faTrash } from '@fortawesome/free-solid-svg-icons';



</script>
<button  on:click={() => remove(cardId)} class="p-2">
    <Fa icon={faTrash} />
</button>   