function dragStart(event, basketIndex, itemIndex) {
    // The data we want to make available when the element is dropped
// is the index of the item being dragged and
// the index of the basket from which it is leaving.
    const data = {basketIndex, itemIndex};
   event.dataTransfer.setData('text/plain', JSON.stringify(data));
}

function drop(event, basketIndex) {
    event.preventDefault();
const json = event.dataTransfer.getData("text/plain");
    const data = JSON.parse(json);
    
    // Remove the item from one basket.
    // Splice returns an array of the deleted elements, just one in this case.
    const [item] = baskets[data.basketIndex].items.splice(data.itemIndex, 1);
    
// Add the item to the drop target basket.
    baskets[basketIndex].items.push(item);
    baskets = baskets;
    
    hoveringOverBasket = null;
}
export {dragStart, drop}