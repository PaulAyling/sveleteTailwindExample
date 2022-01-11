<script>
    export let id
    export let curUsersVersionNumber

    import {cards} from '../../../data/componentsStore'
    import Tags from './Tags.svelte'
    $:allTags = $cards[id].allTags
    $:imageUrl = $cards[id].versions[curUsersVersionNumber].imageUrl
    $:title = $cards[id].versions[curUsersVersionNumber].title
</script>
    <Tags bind:allTags={allTags}/>
    <img src="{imageUrl}" alt="{title}">
