<script>
    import {components} from '../../../../../data/componentsStore'
    import {authenticatedUser} from '../../../../../data/authenticatedUser'
    components.subscribe(value => {
        	console.log('Store Components:', value)
        	console.log('Store Components:', value[1].usersVersion[1].versionId)
        });
    import Card from '../18_RecursiveWithStoreEdit/card.svelte'
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
    <p>components store will be used as a store in all components (not sent via prop)</p>
    <Card id={startingId} map={map} authenticatedUser={authenticatedUser}/>

</main>