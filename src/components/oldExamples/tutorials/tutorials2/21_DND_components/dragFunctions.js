function dragStart(event, basketIndex, itemIndex) {
    const data = {basketIndex, itemIndex};
    event.dataTransfer.setData('text/plain', JSON.stringify(data));
}

export {dragStart}