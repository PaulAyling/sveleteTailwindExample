<script>
        import { flowers } from "../../../stores";
        import Card from '../../layout/card.svelte'
</script>

<h1>This is a child Component loading and looping the Store</h1>
<ul>
    {#each $flowers as flower}
    <Card>
        <li> {flower.title}</li> 
    </Card>
    {/each}

</ul>