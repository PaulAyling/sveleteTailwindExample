import { writable } from 'svelte/store'
export const cardLayout = writable({
    0:{'id':0,'children':[1]},
    1:{'id':1,'children':[]},
    // 2:{'id':2,'children':[]},
    // 3:{'id':3,'children':[]},
    // 4:{'id':4,'children':[6]},
    // 5:{'id':5,'children':[7]},
    // 6:{'id':6,'children':[]},
    // 7:{'id':7,'children':[8,9]},
    // 8:{'id':8,'children':[]},
    // 9:{'id':9,'children':[]},
    // 10:{'id':10,'children':[]},
    // 11:{'id':11,'children':[]},
    // 12:{'id':12,'children':[]},
    })

export const pointerOverCard = writable(null)

