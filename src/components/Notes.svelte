<script>
    export let notes
    export let colorShade
    export let editable
    
    let style 
	  style = " text-blue-100 hover:text-green-400 rounded p-1 w-full flex-grow  bg-blue-"+colorShade

</script>
<div class="px-2 pb-1 rounded-md">

  <pre class={style} role="textbox" contenteditable>{notes}</pre>
</div>

<style>
pre{
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: justify;
}
.textarea:hover{
    background:white;
    color:#DBEAFE;
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
  content: "Comments";
}

</style>