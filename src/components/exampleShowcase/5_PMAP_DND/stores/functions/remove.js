import { cardLayout } from '../cardLayout';
import { getParentId } from '../tools';
import { get } from 'svelte/store';

//UPDATES
export const remove = (cardId) => {
	//1. REMOVE CARD FROM ITEMS
	console.log('ARG: cardId', cardId);
	const parentId = getParentId(cardId);
	console.log('parentId FIRST', parentId);
	// Get item index in items          like   1: { id: 1, items: [{ id: 2 },{ id: 3 }] },
	const snapshot = get(cardLayout);
	const items = snapshot[parentId].items;
	const getIndex = () => {
		for (let i = 0; i < items.length; i++) {
			console.log('LOOP:', items[i]);
			if (items[i].id == cardId) {
				return i;
			}
		}
	};
	const cardIndex = getIndex(cardId);
	console.log('cardIndex', cardIndex);
	// Remove card by index
	console.log('Removng from ', parentId, 'ID#', cardId);
	cardLayout.update((val) => {
		val[parentId].items.splice(cardIndex, 1);
		return val;
	});
    cardLayout = cardLayout
	// 2. Remove child from cardLayout

	// Remove from Hierachy
	// console.log('parentId', parentId);
	// console.log('ITEM:',JSON.stringify(item))

	// console.log('remove running.......',cardId)
	// cardLayout.update(val=>
	// {	delete val[cardId];
	// 	console.log(val)
	// })
};

console.log('getParentId', getParentId(5));
