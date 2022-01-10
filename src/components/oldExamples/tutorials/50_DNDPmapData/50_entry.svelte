<script>
    import {cardMap   } from './pmapStore'
    import {demoStore} from './demoStore'

    import Child from './child.svelte'
    import Draggable from './Draggable.svelte'
    import DemoChild from './DemoChild.svelte'
    cardMap.subscribe(value => {
		console.log('Pmap store:',$cardMap)
	})
    // demoStore.subscribe(value => {
	// 	demoStore.log('Demo store:',$demoStore)
	// })

    $:demoSubset = $demoStore[0]

    const startingId=1
    $:startingChildren= $cardMap[0].componentHierachy[0].level
</script>
<h1>updating react pdmap data in a svelte store</h1>
<!-- <Child bind:arr={curMap}/> -->
<Draggable id={startingId} bind:childrenIds={startingChildren}/>
<DemoChild bind:listArr={demoSubset}/>

