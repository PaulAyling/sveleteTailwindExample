<script>
    import Header from './Header.svelte'
    import Body from './Body.svelte'
    import {cardLayout,fullCardLayout} from './stores/cardLayout'
    //FOR PROPS DATA
    import {cards} from '../../../data/componentsStore' //will need to expand when I bring view back in
    import {authenticatedUser} from '../../../data/authenticatedUser'


    //INITIALIZE VARIABLES
    const startingId = fullCardLayout[1].apexCardId
    const startingArr = $cardLayout[startingId]
    const curUsersVersionNumber = $cards[startingId].usersVersion[$authenticatedUser.userId].versionId
    $:allTags=$cards[startingId].allTags

    
    
</script>
<Header id={startingId} curUsersVersionNumber={curUsersVersionNumber}/>
<Body 
  id={startingId} 
  childArr={startingArr} 
  curUsersVersionNumber={curUsersVersionNumber} 
  bind:allTags={allTags} 
  />
