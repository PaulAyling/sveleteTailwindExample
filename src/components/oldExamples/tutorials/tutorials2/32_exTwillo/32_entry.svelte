<script>
    import {itemsInCart, totalPrice, cartContents} from './stores.js'
    import Item from './Item.svelte'
    import PaulStore from './paulsComp.svelte'
    let inventory = ['apples', 'leeks','potoatoes','flour','berries']
    console.log('cartContents',$cartContents)
</script>
<main>
    <div class='items'>
        {#each inventory as item}
        <Item item={item}/>
        {/each}
    </div>
    <p>There are {$itemsInCart} in your cart</p>
    <p>Cart Total: ${$totalPrice} in your cart</p>
    <p>Cart contents:</p>
    <ol>
        {#each $cartContents as item}
        <li>{item}</li>
        {/each}
    </ol>
</main>
<PaulStore/>
<style>
    .items{
        display:flex;
        flex-direction: row;
    }
</style>