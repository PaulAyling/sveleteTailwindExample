<script>
    import Header from './Header.svelte'
    import Body from './Body.svelte'
    import Droppable from './Droppable.svelte'
    import {cardLayout,fullCardLayout,pointerOverCard} from './stores/cardLayout'

    import {cards} from './stores/cards'



    //INITIALIZE VARIABLES
    const startingId = fullCardLayout[1].apexCardId    
    console.log('startingId',startingId)
    const startingArr = $cardLayout[startingId]
    $:allTags=$cards[startingId].allTags
    
    
</script>
<!-- <Header id={startingId}/>
<Body 
  id={startingId} 
  childArr={startingArr} 
  bind:allTags={allTags} 
  />  -->
  <Droppable 
  cardId={startingId} 
  bind:pointerOverCard={$pointerOverCard}  						
  bind:cardLayout={$cardLayout} />