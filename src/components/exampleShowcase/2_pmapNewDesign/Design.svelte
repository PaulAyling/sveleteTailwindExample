<script>

    const containerStyle = "p-4 rounded-md uppercase m-2"
    const docStyle = "border-slate-300 bg-slate-200  text-xl font-bold"
    const cardStyle = "text-white text-xl font-bold m-2"
    const headerStyle= "bg-green-600 text-white"
    const bodyStyle="bg-blue-200"
    const droppableStyle = "bg-gray-400 text-white  italic"
    const draggableStyle = "bg-gray-300 text-white italic"

</script>

<h1>Svelte component design for this app</h1>
<article class="flex flex-col">
    <div class="{docStyle} {containerStyle}">Document
        <div class=" {headerStyle} {containerStyle}">Header</div>
        <h2>"TITLE OF DOCUMENT - About Transportation" - this zone is not droppable</h2>
        <div class="{droppableStyle} {containerStyle}">DROPPABLE</div>
        <div class="ml-4 {draggableStyle} {containerStyle}">DRAGGABLE</div>
            <div class="ml-4 bg-blue-700 {cardStyle} {containerStyle}">CARD
            <div class="ml-5 {headerStyle} {containerStyle}">Header</div>
            <h2>"Bikes"</h2>
            <div class="ml-5 {droppableStyle} {containerStyle}">DROPPABLE</div>
            <div class="ml-10 {draggableStyle} {containerStyle}">DRAGGABLE</div>
                <div class="ml-16  bg-blue-500 mt-1 {cardStyle} {containerStyle}">CARD
                <div class=" {headerStyle} {containerStyle}">Header</div>
                <h2>"Mountain bikes"</h2>
                <div class="{droppableStyle} {containerStyle}">DROPPABLE</div>
                <div class="ml-4 {draggableStyle} {containerStyle}">DRAGGABLE</div>
                    <div class="ml-8   bg-blue-400 {cardStyle} {containerStyle}">CARD
                    <div class="{headerStyle} {containerStyle}">Header</div>
                    "Trex 632"
                    <div class="{droppableStyle} {containerStyle}">DROPPABLE</div>
                    <div class="ml-8 {draggableStyle} {containerStyle}">DRAGGABLE</div>
                </div>
            </div>
        </div>
    </div>
    

</article>

<style>
h2{
    font-size: 0.8em;
}
</style>