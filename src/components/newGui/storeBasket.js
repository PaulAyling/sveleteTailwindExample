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