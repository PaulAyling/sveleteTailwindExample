<script>
    import Card from '../components/card.svelte'
    let title = "Needs a title"
</script>
<h1>{title}</h1>
<p>A demonstation off sending input up via props</p>
<Card  bind:title={title}/>