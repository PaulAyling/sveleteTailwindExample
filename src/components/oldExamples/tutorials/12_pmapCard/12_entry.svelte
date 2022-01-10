<script>
    import CardOuter from '../../layout/cardOuter.svelte'
    import CardHeader from '../12_pmapCard/cardHeader.svelte'
    import CardBody from '../12_pmapCard/cardBody.svelte'


    import {components} from '../../../data/componentsStore'
    import {componentMap} from '../../../data/componentsMap'
    import {authenticatedUser} from '../../../data/authenticatedUser'
    export let componentId
    // 1. OUTPUT STORE TO CONSOLE
    // components.subscribe(value => {
        // 	console.log('Store Components:', value)
        // });
        // componentMap.subscribe(value => {
        //     console.log('Store Map:', value)
        // });
        // authenticatedUser.subscribe(value => {
        //     console.log('Store authentictedUser:', value)
        // });
    
        const getViewId=(userId)=>{
            //need to finnish off later
            return 1
        }
    //2. GET VIEW ID
    const currentViewId = getViewId(authenticatedUser.userId)
    console.log('currentViewId',currentViewId)
    //3. GET CORRECT VERSION FOR USER
    const usersVersion = $components[componentId].usersVersion[1].versionId
    //4. CREATE DATA FOR COMPONENT
    const allTags = $components[componentId].allTags
    const url = $components[componentId].url
    const {title,imageUrl, notes} =  $components[componentId].versions[usersVersion]
    const childrenIds = $componentMap[currentViewId].componentHierachy[1].children
</script>

        <CardOuter>
            <CardHeader url={url} title={title}/>
            <CardBody title={title} imageUrl={imageUrl} notes={notes} childrenIds={childrenIds}/>
        </CardOuter>



