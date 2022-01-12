<script>
    export let id
    export let map
    export let authenticatedUser
    import {cards} from '../../../../data/componentsStore'
    import Input from '../../../layout/input.svelte'


    import CardBody from '../18_RecursiveWithStoreEdit/cardBody.svelte'
    import CardTemplate from '../../../layout/templates/card.svelte'

    cards.subscribe(value => {
        	console.log('Store card:', value)
        	// console.log('Store card:', value[1].usersVersion[1].versionId)
        });

    const childrenIds = map[id].children

    const getViewId=(userId)=>{
            //need to finnish off later
            return 1
        }
    //2. GET VIEW ID
    const currentViewId = getViewId(authenticatedUser.userId)
    //3. GET CORRECT VERSION FOR USER
    const usersVersion = $cards[1].usersVersion[1].versionId
    //4. CREATE DATA FOR COMPONENT
    const allTags = $cards[id].allTags
    const url = $cards[id].url
    const {title,imageUrl, notes} =  $cards[id].versions[usersVersion]
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
    <h1 class="text-xl uppercase">CARD:{$cards[id].versions[usersVersion].title}{cardData.id} </h1>
    <Input bind:title={$cards[id].versions[usersVersion].title}/>
    <CardBody cardData={cardData} map={map} components={$cards}  authenticatedUser={authenticatedUser}/ />
</CardTemplate>
        

    