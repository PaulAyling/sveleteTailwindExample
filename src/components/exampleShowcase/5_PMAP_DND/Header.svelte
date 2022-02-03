<script>
	export let cardId;
	export let bodyVisible;
	export let editUrl;
	import { cards } from './stores/cards';
	import Fa from 'svelte-fa';
	import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

	import Input from './furniture/Input.svelte';
	import Toolbar from './furniture/buttons/Toolbar.svelte';
	cards.subscribe((value) => {
		console.log('STORE:CARDS:', value);
	});
	console.log('jjjj', editUrl);
</script>

<div class="flex flex-row flex-start p-2 items-center">
	<Fa class="mr-2 align-bottom" icon={faGripVertical} />
	{#if editUrl == false}
		<Input bind:inputText={$cards[cardId].title} inputPlaceholder="Url Description" />
	{:else}
		<Input bind:inputText={$cards[cardId].url} inputPlaceholder="mysite.com/blog" />
	{/if}
	<Toolbar bind:bodyVisible bind:editUrl />
</div>

<style>
</style>
