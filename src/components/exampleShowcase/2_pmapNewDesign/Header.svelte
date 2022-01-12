<script>
    export let id
    export let curUsersVersionNumber
    import {cards} from '../../../data/componentsStore'

</script>
<div class="bg-red-400 p-1 rounded-md ">
    <input class="p-1 bg-gray-200 w-full rounded-md" bind:value={$cards[id].versions[curUsersVersionNumber].title   } placeholder="enter your name">
 </div>
<!-- {$cards[id].versions[curUsersVersionNumber].title } -->