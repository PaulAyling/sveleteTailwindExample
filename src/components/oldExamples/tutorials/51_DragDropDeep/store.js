import { writable } from 'svelte/store'
export const cardLayout = writable({
    0:{'id':0,'children':[1,2]},
    1:{'id':1,'children':[3,4]},
    2:{'id':2,'children':[5,6]},
    3:{'id':3,'children':[]},
    4:{'id':4,'children':[7]},
    5:{'id':5,'children':[]},
    6:{'id':6,'children':[10,11,12]},
    7:{'id':7,'children':[8,9]},
    8:{'id':8,'children':[]},
    9:{'id':9,'children':[]},
    10:{'id':10,'children':[]},
    11:{'id':11,'children':[]},
    12:{'id':12,'children':[]},
    })

export const pointerOverCard = writable(null)

