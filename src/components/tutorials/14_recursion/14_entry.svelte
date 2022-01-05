<script>
    import Card from '../14_recursion/card.svelte'
    const data=
            {
             1:{
                'componentId':1,
                'children':[2,3]
            },
            2:{
                'componentId':2,
                'children':[]
            },
            3:{
                'componentId':3,
                'children':[], 
            }
        }
    const startingId = 1
</script>
<main>
    <Card id={startingId} data={data}/>
</main>