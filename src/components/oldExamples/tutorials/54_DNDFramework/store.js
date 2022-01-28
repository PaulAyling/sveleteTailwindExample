import { writable } from 'svelte/store';
export const items = [
	{ id: 1, name: 'item11', children: [] },
	{ id: 2, name: 'item12', children: [] },
	{ id: 3, name: 'item13', children: [] }
];
export const items2 = {
    0:{'id':0,'children':[1,2,3]},
    1:{'id':1,'children':[]},
    2:{'id':2,'children':[]},
    3:{'id':3,'children':[]},
    }