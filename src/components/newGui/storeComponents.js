import { writable } from 'svelte/store'

export const components = writable(
{
	1: 
    {
		componentId: 1,
		url: "tbc",
        allTags: ["lesiure", "sport", "machines"],
        title: "About Bicycles",
		imageUrl:"https://bikexchange.com/wp-content/uploads/2020/12/bikes1212-e1630349513789.png",
		notes: "tbc",
		},
	2: 
    {
		componentId: 1,
		url: "tbc",
        allTags: ["lesiure", "sport", "machines"],
        title: "About Cars",
		imageUrl:"https://bikexchange.com/wp-content/uploads/2020/12/bikes1212-e1630349513789.png",
		notes: "tbc",
		}
})
   