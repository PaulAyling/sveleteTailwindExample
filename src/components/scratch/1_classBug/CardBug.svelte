<script>
    export let colorShade
	import { flip } from 'svelte/animate';
	import { dndzone, SHADOW_PLACEHOLDER_ITEM_ID } from 'svelte-dnd-action';
    import {nodesImp} from './nodes'
    let nodes = nodesImp
    let node = nodes[1]


	//FORMATTING / CONFIG 
	const flipDurationMs = 300;
	var layout = '';
	if (node.id == 1) {
		layout = 'flex flex-col flex-wrap';
	}
	
	let dragzoneStyle 
	dragzoneStyle  =  "p-2 rounded-md  bg-blue-" + String(colorShade)
</script>

<h1>ClassBug</h1>
<article>
    {each node of node}
    {node.id}
</article>

<style>
    section {
        width: auto;
        border: 0px solid black;
        /* this will allow the dragged element to scroll the list */
        overflow-y: auto;
        height: auto;
    }

</style>
