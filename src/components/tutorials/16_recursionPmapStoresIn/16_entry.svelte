<script>


    import {components} from '../../../data/componentsStore'
    import {componentMap} from '../../../data/componentsMap'
    import {authenticatedUser} from '../../../data/authenticatedUser'
    components.subscribe(value => {
        	console.log('Store Components:', value)
        	console.log('Store Components:', value[1].usersVersion[1].versionId)
        });


    import Card from '../16_recursionPmapStoresIn/card.svelte'
    const map=
            {
             1:{
                'componentId':1,
                'children':[2,3]
            },
            2:{
                'componentId':2,
                'children':[]
            },
            3:{
                'componentId':3,
                'children':[], 
            }
        }
   
    const startingId = 1
</script>
<main>
    <h1>PURPOSE</h1>
    <p>Based on 14 but am loading components from a store here and sending through as a prop</p>
    <Card id={startingId} map={map} components={$components} authenticatedUser={authenticatedUser}/>

</main>