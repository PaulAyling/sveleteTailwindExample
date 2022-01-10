import { writable } from 'svelte/store'

export const demoStore = writable([
	{ 
	'id':1,
	'name':'bob',
},
	{
	'id':2,
	'name':'Jane',
	}
])
