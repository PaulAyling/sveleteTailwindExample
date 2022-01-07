<script>
    // import {multiplyNumber} from '../29_externalFunction/modules'
    //Function with side effects
    let theEffected = 1
    console.log('theEffected first ', theEffected)
    const multiplyNumber=(multiplyer)=>{
        theEffected = theEffected * 3
    }
    multiplyNumber(2)
    console.log('theEffected', theEffected)
</script>
<div>
    <h1>Illustration of using a function in a module bound to a store</h1>
</div>