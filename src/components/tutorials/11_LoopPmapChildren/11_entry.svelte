<script>
    import {components} from '../../../data/componentsStore'
    import {componentMap} from '../../../data/componentsMap'
    import {authenticatedUser} from '../../../data/authenticatedUser'
    export let componentId
    // import Card from '../../layout/card.svelte'
    // import Child from './child.svelte'
    // import InputBox from '../../layout/input.svelte' 

    const currentViewId = 1

    // components.subscribe(value => {
	// 	console.log('Store Components:', value)
	// });
    componentMap.subscribe(value => {
		console.log('Store Map:', value)
	});
    // authenticatedUser.subscribe(value => {
	// 	console.log('Store authentictedUser:', value)
	// });

    const usersVersion = $components[componentId].usersVersion[1].versionId
    const allTags = $components[componentId].allTags
    const url = $components[componentId].url
    const {title,imageUrl, notes} =  $components[componentId].versions[usersVersion]
    const childrenIds = $componentMap[currentViewId].componentHierachy[1].children
</script>
<h1>Read all Pondermap stores from new stores directory </h1>
<h2>Also displays the prop componentId</h2>

<h3>Current Authenticated User:{$authenticatedUser.userId}</h3>
<h3>Current ComponentId (from prop):{componentId}</h3>
<h1>Component Details</h1>
<ul>
    <li>component ID:{componentId}</li>
    <li>component allTags:{$components[componentId].allTags}</li>
    <li>component url:{$components[componentId].url}</li>
    <li>Authenticated Users version:{usersVersion}</li>
    <li>Title:{title}</li>
    <li>imageUrl:{imageUrl}</li>
    <li>notes:{notes}</li>

</ul>
<h1>Component Mappping</h1>
{childrenIds}
