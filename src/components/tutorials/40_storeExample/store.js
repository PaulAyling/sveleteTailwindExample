import { writable } from 'svelte/store'

export	const helloFromStore=(name)=>{
		console.log('hello from the store '+name)
	}

export const store = writable([
	{ 
	'id':1,
	'name':'bob',
},
	{
	'id':2,
	'name':'Jane',
	}
])
