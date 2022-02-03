<script>
    export let notes
</script>
<div class="px-2 pb-1">

  <span class="textarea max-w-6xl rounded p-10" role="textbox" contenteditable></span>
</div>

<style>

/* let righ expansion */


    /* Vertical expansion */
.textarea:hover{
    background:white;
}
.textarea {
  border: 1px solid green;
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
  content: "Commnents";
  color: gray;
}

</style>