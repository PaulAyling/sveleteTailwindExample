<script>
	export let cardId;
	export let bodyVisible;
	import { cards } from './stores/cards';
	import Fa from 'svelte-fa';
	import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

	import Input from './furniture/Input.svelte'
	import Toolbar from './furniture/buttons/Toolbar.svelte'
	cards.subscribe((value) => {
		console.log('STORE:CARDS:', value);
	});
</script>

<div class="flex flex-row flex-start p-2 items-center">
	<Fa class="mr-2 align-bottom" icon={faGripVertical} />
	<input
		class="text-zinc-100 flex-grow  bg-blue-400 align-top"
		bind:value={$cards[cardId].title}
		placeholder="enter your name"
		maxlength=20
	/>
	<Toolbar bind:bodyVisible={bodyVisible}/>
</div>
<style>

	</style>