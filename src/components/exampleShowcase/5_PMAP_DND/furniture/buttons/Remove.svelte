<script>
    export let bodyVisible
    import Fa from 'svelte-fa';
	import { faTrash } from '@fortawesome/free-solid-svg-icons';

    const toggle=() =>{
	bodyVisible = !bodyVisible
}
</script>
<button  on:click={toggle} class="p-2">
    <Fa icon={faTrash} />
</button>   