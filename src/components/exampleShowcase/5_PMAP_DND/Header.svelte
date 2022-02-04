<script>
	export let cardId;
	export let bodyVisible;
	export let editUrl;
	export let colorShade
	import { cards } from './stores/cards';
	import Fa from 'svelte-fa';
	import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

	import Input from './furniture/Input.svelte';
	import Toolbar from './furniture/buttons/Toolbar.svelte';
	cards.subscribe((value) => {
		console.log('STORE:CARDS:', value);
	});
</script>

<div class="flex flex-row flex-start p-2 items-center">
	<Fa class="mr-2 align-bottom" icon={faGripVertical} />
	{#if editUrl == false}
		<Input bind:inputText={$cards[cardId].title} inputPlaceholder="Url Description" colorShade={colorShade}/>
	{:else}
		<Input bind:inputText={$cards[cardId].url} inputPlaceholder="mysite.com/blog" colorShade={colorShade}/>
	{/if}
	<Toolbar bind:bodyVisible bind:editUrl cardId={cardId} />
</div>

<style>
</style>
