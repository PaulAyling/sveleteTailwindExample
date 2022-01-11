<script>
    export let id
    export let curCard
    export let curUsersVersionNumber
    import {cards} from '../../../data/componentsStore'

    

</script>

<h1>Header section</h1>
<div class="bg-red-400 p-1 rounded-md ">
    <input class="p-1 bg-gray-200 w-full rounded-md" bind:value={$cards[id].versions[curUsersVersionNumber].title   } placeholder="enter your name">
 </div>
{$cards[id].versions[curUsersVersionNumber].title }