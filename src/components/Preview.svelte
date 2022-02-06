<script>
    export let nodes
    export let cardId
    import {cards} from './stores/cards'
</script>

<header class="flex flex-row flex-start p-2 items-center">
    {$cards[cardId].title}
</header>
<article>
    Image
    text
</article>


