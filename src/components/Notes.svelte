<script>
    // export let notes
    export let cardId
    export let colorShade
    export let editable
    import {cards} from './stores/cards'

    const newShade = colorShade +1
    
    let style 
	  style ="textarea text-blue-100 hover:text-green-400 rounded w-full flex-grow "
    console.log('style', style)

</script>
<div class=" pb-1 rounded-md">
  <pre  class={style} placeholder="Enter Notes"  role="textbox" contenteditable bind:innerHTML={$cards[cardId].notes}></pre>
</div>

<style>
pre{
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: justify;
}
.textarea:hover{
  opacity:50;
}
.textarea {
  border: 1px solid #22c55e;
  font-family: inherit;
  font-size: inherit;
  padding: 1px 6px;
}
.textarea {
  display: block;
  width: 100%;
  overflow: hidden;
  resize: both;
  min-height: 40px;
  line-height: 20px;
}
.textarea[contenteditable]:empty::before {
  content: "You can add notes here";
}

</style>