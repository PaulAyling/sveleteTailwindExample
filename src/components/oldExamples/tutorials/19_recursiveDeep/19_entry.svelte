<script>
    import Blue from './blue.svelte'

   const data = {
    1:{child:[4]},
    2:{child:[5,6]},
    3:{child:[]},
    4:{child:[]},
    5:{child:[]},
    6:{child:[7]},
    7:{child:[]},
} 
const startingId = 1
</script>

<h1>this is a test</h1>
<Blue id = {startingId} data={data}/>