<script>
    export let arr
    export let parentIndex
    export let hoveringOverBasket
    export let drop
    export let dragStart
    import {flip} from 'svelte/animate';
    import Links from './links.svelte'

</script>

{#each arr as item, arrIndex (item)}
    <div animate:flip  >
    <b>{item.name}</b>  
    <ul
            class:hovering={hoveringOverBasket === item.name}
        on:dragenter={() => hoveringOverBasket = item.name}
        on:dragleave={() => hoveringOverBasket = null}
            on:drop={event => drop(event, arrIndex)}
            ondragover="return false"
            class="bg-blue-200">
            <Links arr={item.items} basketIndex={arrIndex} dragStart={dragStart}/>    
        </ul>
    </div>
{/each}