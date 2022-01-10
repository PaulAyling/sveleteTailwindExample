<script>
        import {baskets} from './store'
        import Input from '../../scratch/layout/input.svelte'
    console.log('SVELTE STORE:',$baskets)
</script>
<div class="rounded-md p-3 m-2">
    <ul >
        {#each $baskets as basket}
        <li class="m-2 p-3 bg-red-500 rounded-md" >{basket.name}</li>
        <li class="m-2 p-3 bg-gray-500 rounded-md text-white"><Input  bind:name={basket.name}/></li>
        {/each}
    </ul>
</div>
