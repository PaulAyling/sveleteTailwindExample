<script>
	export let cardId;
	import { cards } from './stores/cards';
	import Fa from 'svelte-fa';
	import { faFlag } from '@fortawesome/free-solid-svg-icons';
	cards.subscribe((value) => {
		console.log('STORE:CARDS:', value);
	});
</script>

<div class="flex flex-row flex-start p-2">
	<Fa class="mr-2" icon={faFlag} />
	<input
		class="text-zinc-100 flex-grow  bg-blue-400"
		bind:value={$cards[cardId].title}
		placeholder="enter your name"
	/>
</div>
<style>

	</style>