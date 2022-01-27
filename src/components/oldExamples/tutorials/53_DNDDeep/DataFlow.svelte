
    <script>

        const containerStyle = "p-4 rounded-md uppercase m-2"
        const docStyle = "border-slate-300 bg-slate-200  text-xl font-bold"
        const cardStyle = "text-white text-xl font-bold m-2"
        const headerStyle= "bg-green-700 text-gray-200"
        const bodyStyle="bg-green-700 text-gray-200"
        const droppableStyle = "bg-gray-400 text-white  italic"
        const draggableStyle = "bg-gray-400 text-white italic"
    
    </script>
    
    <h1>Svelte component design for this app</h1>
    <article class="flex flex-col">
        <div class="{docStyle} {containerStyle}">Entry
            <div class=" {droppableStyle} {containerStyle}">DROPPABLE</div>
            <div class="m-6 {headerStyle} {containerStyle}">Header</div>
            <h2>"TITLE OF DOCUMENT - About Transportation" - this zone is not droppable</h2>
            <div class="m-6 {bodyStyle} {containerStyle}">Body</div>
            <div class="ml-10 {draggableStyle} {containerStyle}">DRAGGABLE</div>
    
            <div class="ml-16 bg-blue-700 {cardStyle} {containerStyle}">CARD
                <div class=" {droppableStyle} {containerStyle}">DROPPABLE</div>
                <div class="m-6 {headerStyle} {containerStyle}">Header</div>
                <h2>"TITLE OF DOCUMENT - About Transportation" - this zone is not droppable</h2>
                <div class="m-6 {bodyStyle} {containerStyle}">Body</div>
                <div class="ml-14 {draggableStyle} {containerStyle}">DRAGGABLE</div>
    
                <div class="ml-20  bg-blue-500 mt-1 {cardStyle} {containerStyle}">CARD
                    <div class=" {droppableStyle} {containerStyle}">DROPPABLE</div>
                    <div class="m-6 {headerStyle} {containerStyle}">Header</div>
                    <h2>"Mountain bikes"</h2>
                    <div class=" {bodyStyle} {containerStyle}">Body</div>
                    <div class="ml-10 {draggableStyle} {containerStyle}">DRAGGABLE</div>
                    
                    <div class="ml-20   bg-blue-400 {cardStyle} {containerStyle}">CARD
                        <div class=" {droppableStyle} {containerStyle}">DROPPABLE</div>
                        <div class="m-6 {headerStyle} {containerStyle}">Header</div>
                        "Trex 632"
                        <div class=" {bodyStyle} {containerStyle}">Body</div>
                        <div class="ml-10 {draggableStyle} {containerStyle}">DRAGGABLE</div>
                    </div>
                </div>
            </div>
        </div>
        
    
    </article>
    
    <style>
    h2{
        font-size: 0.8em;
        text-align: center;
    }
    </style>
