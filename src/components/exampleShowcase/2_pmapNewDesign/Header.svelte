<script>
    export let id
    import {cards} from './stores/cards'
</script>
<div class="bg-red-400 p-1 rounded-md ">
    <input class="p-1 bg-gray-200 w-full rounded-md" bind:value={$cards[id].title   } placeholder="enter your name">
 </div>
