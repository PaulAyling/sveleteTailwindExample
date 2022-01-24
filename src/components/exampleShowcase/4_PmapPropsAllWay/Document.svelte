<script>
  import {cardLayout,fullCardLayout,pointerOverCard} from './stores/cardLayout'
  import {cards} from './stores/cards'
  import Card from './Card.svelte'
  import Header from './Header.svelte'

  cards.subscribe(value => {
		console.log('STORE:CARDS:',value)
	})
  cardLayout.subscribe(value => {
		console.log('STORE:layoutMap',value)
	})

    //INITIALIZE VARIABLES
    const startingId = fullCardLayout[1].apexCardId    
    console.log('startingId',startingId)
</script>
<Header cardId={startingId}/>
<Card cardId={startingId} pointerOverCard={$pointerOverCard} />