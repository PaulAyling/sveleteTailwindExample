<script>
    import Design from './Design.svelte'
    import Header from './Header.svelte'
    import Body from './Body.svelte'
    import Droppable from './Droppable.svelte'
    import Draggable from './Draggable.svelte'
    import Card from './Card.svelte'

    //stores
    import {cardMap} from './storeCardMap'

    cardMap.subscribe(value => {
		console.log('STORE: cardMap:',$cardMap)
	})
    //Initialization
    const startingId = $cardMap.id
    console.log('startingId',startingId)
    
    
  </script>
<h1>pondermap...... no really</h1>
<Header id={startingId} />
