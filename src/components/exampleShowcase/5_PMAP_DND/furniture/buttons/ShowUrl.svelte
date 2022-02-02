<script>
    export let bodyVisible
    import Fa from 'svelte-fa';
	import { faGlobe } from '@fortawesome/free-solid-svg-icons';

    const toggle=() =>{
	bodyVisible = !bodyVisible
}
</script>
<button  on:click={toggle} class="p-1">
    <Fa  icon={faGlobe} />
</button>   