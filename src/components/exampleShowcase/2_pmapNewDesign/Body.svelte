<script>
    export let id
    export let curUsersVersionNumber
    export let hoveringOverCard

    import {cards} from '../../../data/componentsStore'
    import Tags from './Tags.svelte'
    import Draggable from './Draggable.svelte'
    $:allTags = $cards[id].allTags
    $:imageUrl = $cards[id].versions[curUsersVersionNumber].imageUrl
    $:title = $cards[id].versions[curUsersVersionNumber].title

</script>
    <Tags bind:allTags={allTags}/>
    <img src="{imageUrl}" alt="{title}">
    <!-- <Draggable bind:hoveringOverCard={hoveringOverCard}/> -->
