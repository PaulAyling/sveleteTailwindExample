function dragStart(event, basketIndex, itemIndex) {
    const data = {basketIndex, itemIndex};
    event.dataTransfer.setData('text/plain', JSON.stringify(data));
}
function drop(event, basketIndex) {
    event.preventDefault();
    const json = event.dataTransfer.getData("text/plain");
    const data = JSON.parse(json);
    const [item] = $baskets[data.basketIndex].items.splice(data.itemIndex, 1);
    $baskets[basketIndex].items.push(item);
    $baskets = $baskets;
    hoveringOverBasket = null;
}
export {dragStart,drop}