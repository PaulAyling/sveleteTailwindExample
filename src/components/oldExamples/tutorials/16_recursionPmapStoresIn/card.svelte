<script>
    export let id
    export let map
    export let components
    export let authenticatedUser
    import CardBody from '../16_recursionPmapStoresIn/cardBody.svelte'
    import CardTemplate from '../../layout/templates/card.svelte'
    const childrenIds = map[id].children

    const getViewId=(userId)=>{
            //need to finnish off later
            return 1
        }
    //2. GET VIEW ID
    const currentViewId = getViewId(authenticatedUser.userId)
    console.log('currentViewId',currentViewId)
    //3. GET CORRECT VERSION FOR USER
    const usersVersion = components[1].usersVersion[1].versionId
    //4. CREATE DATA FOR COMPONENT
    const allTags = components[id].allTags
    const url = components[id].url
    const {title,imageUrl, notes} =  components[id].versions[usersVersion]
    const cardData = {
        'id':id,
        'title':title,
        'url':url,
        'imageUrl':imageUrl,
        'notes':notes,
        'allTags':allTags,
        'childrenIds':childrenIds
    }

</script>
<CardTemplate>
    <h1 class="text-xl uppercase">CARD:{cardData.title}{cardData.id} </h1>
    <CardBody cardData={cardData} map={map} components={components}  authenticatedUser={authenticatedUser}/ />
</CardTemplate>
        

    