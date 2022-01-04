<script>
    import {components} from '../../../data/componentsStore'
    import {componentMap} from '../../../data/componentsMap'
    import {authenticatedUser} from '../../../data/authenticatedUser'
    export let componentId
    // import Card from '../../layout/card.svelte'
    // import Child from './child.svelte'
    // import InputBox from '../../layout/input.svelte' 

    const currentViewId = 1

    components.subscribe(value => {
		console.log('Store Components:', value)
	});
    // componentMap.subscribe(value => {
	// 	console.log('Store Map:', value)
	// });
    // authenticatedUser.subscribe(value => {
	// 	console.log('Store authentictedUser:', value)
	// });
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
    <li>Authenticated Users version:{$components[componentId].usersVersion[1].versionId}</li>

</ul>
<h1>Component Mappping</h1>
