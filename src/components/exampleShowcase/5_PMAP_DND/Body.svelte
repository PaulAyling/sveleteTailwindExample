<script>
    export let cardId
    import {cards} from './stores/cards'
    import Tags from './Tags.svelte'
    import Notes from './Notes.svelte'
    import ImageCard from './furniture/ImageCard.svelte'


    $:imageUrl = $cards[cardId].imageUrl
    $:title = $cards[cardId].title
    $:notes = $cards[cardId].notes
</script>
    <Tags cardId={cardId}/>
    <ImageCard imageUrl = {imageUrl} title = {title}/>
    <Notes bind:notes={notes} />
