<script>
    import Design from './Design.svelte'     //show the app design
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
    //FOR HEADER & BODY
    const startingId = $cardMap.id
    const curCard = $cards[startingId]
    const curUsersVersionNumber = curCard.usersVersion[$authenticatedUser.userId].versionId
    $:allTags=$cards[startingId].allTags
    
    
  </script>
  <!-- <Design/> -->
<Header id={startingId} curUsersVersionNumber={curUsersVersionNumber} curCard={curCard}/>
<Body id={startingId} curUsersVersionNumber={curUsersVersionNumber} curCard={curCard} bind:allTags={allTags}/>
