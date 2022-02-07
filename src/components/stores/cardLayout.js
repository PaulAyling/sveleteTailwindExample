import { writable } from 'svelte/store'
export const nodes = writable({
    1: { id: 1, items: [{ id: 2 },{ id: 3 }] ,cols:false},
    2: { id: 2, items: [{ id: 4 },{id: 5}] ,cols:false},
    3: { id: 3, items: [] ,cols:false},
    4: { id: 4, items: [] ,cols:false},
    5: { id: 5, items: [{ id: 6 }] ,cols:false},
    6: { id: 6, items: [] ,cols:false},
})



