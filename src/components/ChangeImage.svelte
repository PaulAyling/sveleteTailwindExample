<script>
    export let colorShade
    export let cardId
    import Input from './furniture/Input.svelte'
    import {cards} from './stores/cards'
    let newUrl = ''
    

    const addNewUrl = (newUrl,cardId) =>{
        console.log('pront this',newUrl,cardId)
        cards.update((val) => {
			val[cardId].imageUrl =newUrl
			return val;
		});


    }

</script>



<div class="blue-900 rounded-md h-24">
    <Input bind:inputText={newUrl} inputPlaceholder="Enter new url" {colorShade} />
    <button  on:click={() => addNewUrl(newUrl,cardId)} class="mt-3 p-2 text-white bg-green-400 rounded-md">
        submit
    </button>
</div>