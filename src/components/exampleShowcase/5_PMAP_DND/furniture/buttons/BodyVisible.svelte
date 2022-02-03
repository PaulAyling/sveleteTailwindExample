<script>
    export let bodyVisible
    import Fa from 'svelte-fa';
	import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';


    const toggle=() =>{
	bodyVisible = !bodyVisible
}
</script>
<button  on:click={toggle} class="p-1">
    <Fa icon={bodyVisible? faSortDown : faSortUp} className="ml-2 mr-1 hover:text-blue-500" />
</button>   