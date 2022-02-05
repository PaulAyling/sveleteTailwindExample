<script>
    export let cardId
    export let removeRecord
    import Fa from 'svelte-fa';
	import { faTrash } from '@fortawesome/free-solid-svg-icons';
	import { Confirm } from 'svelte-confirm'
    import { slide } from 'svelte/transition'

</script>
<Confirm
confirmTitle="Delete"
cancelTitle="Cancel"
let:confirm="{confirmThis}"
themeColor="200"
>

<button  on:click={() => confirmThis(removeRecord, cardId)} class="p-2">
    <Fa icon={faTrash} />
</button>
<span slot="title">
    Delete this item?
  </span>
  <span slot="description">
    You won't be able to revert this!
  </span>
</Confirm>
