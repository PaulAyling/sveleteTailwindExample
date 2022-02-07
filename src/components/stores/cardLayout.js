import { writable } from 'svelte/store'
export const nodes = writable({
    1: { id: 1, items: [{ id: 2 },{ id: 3 }] },
    2: { id: 2, items: [{ id: 4 },{id: 5}] },
    3: { id: 3, items: [] },
    4: { id: 4, items: [] },
    5: { id: 5, items: [{ id: 6 }] },
    6: { id: 6, items: [] },
})



