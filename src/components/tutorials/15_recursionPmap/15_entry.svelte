<script>
    import Card from '../15_recursionPmap/card.svelte'
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
    <h1>PURPOSE</h1>
    <p>Same as 14 only I am loading all the 3 stores into the system to see if that breaks it</p>
    <Card id={startingId} data={data}/>
</main>