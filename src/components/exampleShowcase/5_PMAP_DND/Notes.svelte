<script>
    export let notes
    export let colorShade

    var textCol
	colorShade < 500 ? textCol = "text-blue-800" : textCol = "text-blue-100"	
	let style 
	style = textCol+" hover:bg-green-400 hover:text-white rounded p-1 w-full flex-grow  bg-blue-"+colorShade


</script>
<div class="px-2 pb-1 rounded-md">

  <span class={style} role="textbox" contenteditable>{notes}</span>
</div>

<style>

/* let righ expansion */


    /* Vertical expansion */
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