<script>
    export let id
    export let childArr
    export let curUsersVersionNumber
    import {pointerOverCard} from './stores/cardLayout'
    import {cards} from '../../../data/componentsStore'
    import Tags from './Tags.svelte'
    import Draggable from './Draggable.svelte'

    console.log('hoveringOverCard',pointerOverCard)
    console.log('childArr',childArr)
    $:allTags = $cards[id].allTags
    $:imageUrl = $cards[id].versions[curUsersVersionNumber].imageUrl
    $:title = $cards[id].versions[curUsersVersionNumber].title
</script>
    <Tags bind:allTags={allTags}/>
    <img src="{imageUrl}" alt="{title}">
    <!-- GOT TO HERE -->
    <!-- <Draggable bind:hoveringOverCard={$pointerOverCard} bind:childArr={childArr}/> -->
