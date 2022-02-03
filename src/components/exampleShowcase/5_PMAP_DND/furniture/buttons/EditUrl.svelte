<script>
    export let editUrl
    import Fa from 'svelte-fa';
	import { faGlobe } from '@fortawesome/free-solid-svg-icons';

    const toggle=() =>{
        editUrl = !editUrl
        console.log('toggle initiated......editUrl:',editUrl)
}
</script>
<button  on:click={toggle} class="p-1">
    <Fa  icon={faGlobe} />
</button>   