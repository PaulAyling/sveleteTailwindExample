import { writable } from 'svelte/store'
export const cardLayout = writable({
    0:{'id':0,'children':[1,2,3]},
    1:{'id':1,'children':[4,5]},
    2:{'id':2,'children':[]},
    3:{'id':3,'children':[]},
    4:{'id':4,'children':[7]},
    5:{'id':5,'children':[6]},
    6:{'id':6,'children':[]},
    7:{'id':7,'children':[8,9]},
    8:{'id':7,'children':[]},
    9:{'id':7,'children':[]},
    })

export const pointerOverCard = writable(null)

