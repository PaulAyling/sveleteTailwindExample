<script>
    export let cardId
    import Fa from 'svelte-fa';
	import { faTrash } from '@fortawesome/free-solid-svg-icons';

    const remove=() =>{
	console.log('remove  running....' ,cardId)
}
</script>
<button  on:click={remove} class="p-2">
    <Fa icon={faTrash} />
</button>   