<script>
    export let cardId
    import {cards} from './stores/cards'
</script>
<div class="bg-red-400 p-1 rounded-md flex-row">
    <div>FROM:Header{cardId}</div>
    <div><input class="p-1 bg-gray-200 w-full rounded-md" bind:value={$cards[cardId].title   } placeholder="enter your name"></div>
 </div>
