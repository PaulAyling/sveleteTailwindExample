<script>
	import Content from './Content.svelte'

	let nodes = {
		node1:{name:'node 1',	//Higest level
					 items:[
						{id: 'node2'},
						{id: 'node3'},
						{id: 'node4'}
					 ],
					 id:'node1'
					},
		node2:{name:'node 2',
					 items:[
					 ],
					 id:'node2'
					},
		node3:{name:'node 3',
					 items:[
						 {id: 'node9'},
						 {id: 'node10'},
						 {id: 'node11'},
						 {id: 'node12'}
					 ],
					 id:'node3'
					},
		node4:{name:'node 4',
					 items:[
						 {id: 'node13'},
						 {id: 'node14'},
						 {id: 'node15'},
						 {id: 'node16'}
					 ],
					 id:'node4',
					 color: 'salmon'
					},
	}
		


// 	node4: {
// 		name: 'node 4',
// 		items: [{ id: 'node13' }, { id: 'node14' }, { id: 'node15' }, { id: 'node16' }],
// 		id: 'node4',
// 		color: 'salmon'
// 	},
// 	node5: { id: 'node5', name: 'item 5' },
// 	node6: { id: 'node6', name: 'item 6' },
// 	node7: { id: 'node7', name: 'item 7' },
// 	node8: { id: 'node8', name: 'item 8' },
// 	node9: { id: 'node9', name: 'item 9' },
// 	node10: { id: 'node10', name: 'item 10' },
// 	node11: { id: 'node11', name: 'item 11' },
// 	node12: { id: 'node12', name: 'item 12' },
// 	node13: { id: 'node13', name: 'item 13' },
// 	node14: { id: 'node14', name: 'item 14' },
// 	node15: { id: 'node15', name: 'item 15' },
// 	node16: { id: 'node16', name: 'item 16' }
// };
for (let i = 5; i < 17; i++) {
  nodes[`node${i}`]={id:`node${i}`, name:`item ${i}`}
}

// nodes['node14'].color='orange'
// nodes['node15'].color='orange'
// nodes['node11'].color='steelblue'
// nodes['node6'].color='forestgreen'
// nodes['node10'].color='steelblue'
console.log('REAL THING:',JSON.stringify(nodes));
		
</script>
<h3>
	Try dragging node2 into node3 and then node4 into node2 
</h3>
<Content node={nodes.node1} bind:nodes={nodes} />
