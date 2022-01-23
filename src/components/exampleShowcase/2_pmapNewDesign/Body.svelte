<script>
    export let cardId
    import {pointerOverCard,cardLayout} from './stores/cardLayout'
    import {cards} from './stores/cards'
    import Tags from './Tags.svelte'
    import Droppable from './Droppable.svelte'


    $:imageUrl = $cards[cardId].imageUrl
    $:title = $cards[cardId].title
</script>
    <Tags cardId={cardId}/>
    <img src="{imageUrl}" alt="{title}">
    <!-- GOT TO HERE -->
