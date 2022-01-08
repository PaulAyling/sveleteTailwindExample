import { writable } from 'svelte/store'

export const baskets = writable([
    {
      "name": "Basket 1",
      "items": ["Orange", "Pineapple"]
    },
    {
      "name": "Basket 2",
      "items": ["Banana", "Apple"]
    },
    {
      "name": "Basket 3",
      "items": ["GrapeFruit"]
    },
    {
      "name": "Basket 4",
      "items": ["peach"]
    }
    ])
export const bigBaskets = writable([[{ 
    'id':1,
    'children':[
        {
            'id':2,
            'children':[
                {
                    'id':4,
                    'children'[
                        {
                            'id':7,
                            'children':[

                            ]
                        },
                        {
                            'id':8,
                            'children':[

                            ]
                        },
                        {
                            'id':9,
                            'children':[

                            ]
                        },

                    ]
                }
            ]
        },
        {
            'id':3,
            'children':[
 {
                    'id':5,
                    'children'[
                        {
                            'id':10,
                            'children':[

                            ]
                        },
                        {
                            'id':11,
                            'children':[

                            ]
                        },
                    ]
                }
            ]
        },
        {
            'id':4,
            'children':[
                {
                    'id':6,
                    'children'[
                        {
                            'id':12,
                            'children':[

                            ]
                        },
                    ]
                }
            ]        
        }
    ]
}]




//     {[
//     {[
//         {[{[]},{[]},{[]}]},
//         {[{[]},{[]},{[]}]},
//         {[{[]},{[]},{[]}]}
//     ]},
//     {[
//         {[{[]},{[]},{[]}]},
//         {[{[]},{[]},{[]}]},
//         {[{[]},{[]},{[]}]}
//     ]},
//     {[
//         {[{[]},{[]},{[]}]},
//         {[{[]},{[]},{[]}]},
//         {[{[]},{[]},{[]}]}
//     ]},
// ]}
// }
    
// ]

