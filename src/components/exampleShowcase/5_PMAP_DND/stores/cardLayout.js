import { writable } from 'svelte/store'
let nodes = {
    1: { id: 1, items: [{ id: 2 }] },
    2: { id: 2, items: [{ id: 3 },{ id: 4 },{id: 5}] },
    3: { id: 3, items: [] },
    4: { id: 4, items: [] },
    5: { id: 5, items: [{ id: 6 },{ id: 7 }] },
    6: { id: 6, items: [] },
    7: { id: 7, items: [] }
};

export const cardLayout = writable(nodes)



