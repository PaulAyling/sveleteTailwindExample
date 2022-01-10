<script>
    export let id
    import {cards} from '../../../data/componentsStore'
    import {authenticatedUser} from '../../../data/authenticatedUser'
    import {users} from '../../../data/users' 

    cards.subscribe(value => {
		console.log('STORE: cards:',$cards)
	})
    authenticatedUser.subscribe(value => {
		console.log('STORE: cards:',$authenticatedUser)
	})
    users.subscribe(value => {
		console.log('STORE: cards:',$users)
	})


</script>

<h1>Header section</h1>
<p>{id}</p>