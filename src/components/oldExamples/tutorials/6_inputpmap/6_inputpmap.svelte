<script>
    import {componentView} from '../../../stores'
    import {componentViews} from '../../../stores'
    import InputBx from './input.svelte'
    

    // This tutorial will aloow me to update a data structure like the pmap one
    componentView.subscribe(value => {
		console.log('Store value:', value)
	});
</script>
<h1>An input box to update my</h1>
<ul>
{#each $componentView as view, viewIndex (view)}
<li>
  <InputBx bind:item={view.name}/>
  {view.name}

</li>
{/each}
</ul>
<h2>My Pondermap data</h2>
<ul>
{#each $componentViews as view, viewIndex (view)}
<li>

  {view.docViewId}

</li>
{/each}
</ul>