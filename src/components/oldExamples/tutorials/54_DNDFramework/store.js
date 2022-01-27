import { writable } from 'svelte/store';
export const trello = [
	{
		id: 1,
		name: 'TODO',
		items: [
			{ id: 41, name: 'item41' },
			{ id: 42, name: 'item42' },
			{ id: 43, name: 'item43' },
			{ id: 44, name: 'item44' },
			{ id: 45, name: 'item45' },
			{ id: 46, name: 'item46' },
			{ id: 47, name: 'item47' },
			{ id: 48, name: 'item48' },
			{ id: 49, name: 'item49' }
		]
	},
	{
		id: 2,
		name: 'DOING',
		items: []
	},
	{
		id: 3,
		name: 'DONE',
		items: []
	}
];

export const pointerOverCard = writable(null);
