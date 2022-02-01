<script>
    export let cardId
    import {cards} from './stores/cards'
    import Tags from './Tags.svelte'


    $:imageUrl = $cards[cardId].imageUrl
    $:title = $cards[cardId].title
</script>
    <Tags cardId={cardId}/>
    <img src="{imageUrl}" alt="{title}">
