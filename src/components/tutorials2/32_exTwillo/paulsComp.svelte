<script>
    import {myStore} from './stores.js'
    myStore.subscribe(value => {
		console.log($myStore)
	})
        function addObj(obj) {
            myStore.update(contents => [...contents,obj])
        }
        
    let obj = {'id':2,'name':'Paul'}
    myStore.set([{'id':1,'name':'Jane'}]);   
</script>
<div>
    <h1>paulsstore</h1>
    <ul>
        {#each $myStore as person }
        <li>{person.name}</li>
        {/each}
    </ul>
    <!-- Function invoked with parameter -->
    <button on:click={()=> addObj(obj)}>Add New name</button>

</div>