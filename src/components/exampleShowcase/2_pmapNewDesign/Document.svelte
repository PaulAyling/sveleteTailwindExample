<script>
    import Header from './Header.svelte'
    import Body from './Body.svelte'

    import {cardMap} from './storeCardMap'
    //FOR PROPS DATA
    import {cards} from '../../../data/componentsStore'
    import {authenticatedUser} from '../../../data/authenticatedUser'

  //   cardMap.subscribe(value => {
	// 	console.log('STORE: cardMap:',$cardMap.id)
	// })
  //   cards.subscribe(value => {
	// 	console.log('STORE: cards:',$cards['1'])
	// })
  //   authenticatedUser.subscribe(value => {
	// 	console.log('STORE: authent user:',$authenticatedUser)
	// })
  //   users.subscribe(value => {
	// 	console.log('STORE: users:',$users)
	// })
  let hoveringOverCard;
	function dragStart(event, basketIndex, itemIndex) {
		const data = {basketIndex, itemIndex};
   	event.dataTransfer.setData('text/plain', JSON.stringify(data));
	}
	
	function drop(event, basketIndex) {
		event.preventDefault();
    const json = event.dataTransfer.getData("text/plain");
		const data = JSON.parse(json);
		const [item] = baskets[data.basketIndex].items.splice(data.itemIndex, 1);
		baskets[basketIndex].items.push(item);
		baskets = baskets;
    hoveringOverCard = null;
	}

    //FOR HEADER & BODY
    const startingId = $cardMap.id
    const childArr = $cardMap.children
    const curCard = $cards[startingId]
    const curUsersVersionNumber = curCard.usersVersion[$authenticatedUser.userId].versionId
    $:allTags=$cards[startingId].allTags
    // this is the card that the drag is dragged over
   
    
    
</script>
<Header id={startingId} curUsersVersionNumber={curUsersVersionNumber} curCard={curCard}/>
<Body 
  id={startingId} 
  childArr={childArr} 
  curUsersVersionNumber={curUsersVersionNumber} 
  bind:allTags={allTags} 
  bind:hoveringOverCard={hoveringOverCard}
  dragStart={dragStart}
  drop={drop}
  />
