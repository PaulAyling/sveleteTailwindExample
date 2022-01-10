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
