<script>
    import {baskets} from '../../../stores'
    import InputBx from './input.svelte'

    // Log out store on changes
    baskets.subscribe(value => {
		console.log('Store Updated:', $baskets)
		console.log('Store value:', value)
	});
</script>
<h1>Using Subscribe so you can output the current store state to console</h1>
<ul>
{#each $baskets as basket, basketIndex (basket)}
<li>
  <InputBx bind:item={basket.name}/>
</li>
{/each}
</ul>