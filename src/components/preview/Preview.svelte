<script>
	export let cardId;
	import { cards } from '../stores/cards';
	import PreviewCard from './PCard.svelte';
</script>

<h1>Preview</h1>
<PreviewCard {cardId} />
