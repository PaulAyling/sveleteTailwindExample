<script>
    export let id
    export let childArr
    export let curUsersVersionNumber
    export let hoveringOverCard
    export let dragStart
    export let drop

    import {cards} from '../../../data/componentsStore'
    import {cardMap} from './stores/cardMap'

    import Tags from './Tags.svelte'
    import Draggable from './Draggable.svelte'

    console.log('hoveringOverCard',hoveringOverCard)
    console.log('childArr',childArr)
    $:allTags = $cards[id].allTags
    $:imageUrl = $cards[id].versions[curUsersVersionNumber].imageUrl
    $:title = $cards[id].versions[curUsersVersionNumber].title
</script>
    <Tags bind:allTags={allTags}/>
    <img src="{imageUrl}" alt="{title}">
    <!-- <Draggable bind:hoveringOverCard={hoveringOverCard}/> -->
    <Draggable bind:hoveringOverCard={hoveringOverCard} bind:childArr={childArr} dragStart={dragStart} drop={drop}/>
