import { writable } from 'svelte/store'

export const flowers = writable([
  {
    id: 1,
    rating: 10,
    title:'A Yellow Daffodil',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: 2,
    rating: 9,
    title:'A Red Rose',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: 3,
    rating: 8,
    title:'A Purple Pansy',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
])

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