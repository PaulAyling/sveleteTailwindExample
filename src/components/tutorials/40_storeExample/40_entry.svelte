<script>
	import {store,helloFromStore} from './store'
	 store.subscribe(value => {
		console.log(value)
	})
	
	const helloFromApp=(name)=>{
		console.log('From the App I say a big HELLO to '+name)
	}
	//USING LOCAL VARS
	helloFromApp('bob')
	helloFromStore('Jane')
	
	//MODIFYING THE STORE
	
</script>
<ul>
	{#each $store as person,index (id)}
	{person.name}
	{/each}
</ul>