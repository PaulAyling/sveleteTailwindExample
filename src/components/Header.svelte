<script>
	export let cardId;
	export let bodyVisible;
	export let editUrl;
	export let colorShade
	export let removeRecord
	import { cards } from './stores/cards';
	import Fa from 'svelte-fa';
	import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

	import Input from './furniture/Input.svelte';
	import Toolbar from './furniture/buttons/Toolbar.svelte';

	const styleIcon = "mr-2 align-bottom level text-white"
</script>

<div class="flex flex-row flex-start p-2 items-center">
	<Fa class="mr-2 align-bottom text-gray-300" icon={faGripVertical} />
	{#if editUrl == false}
		<Input bind:inputText={$cards[cardId].title} inputPlaceholder="write Title" colorShade={colorShade}/>
	{:else}
		<Input bind:inputText={$cards[cardId].url} inputPlaceholder="url here" colorShade={colorShade}/>
	{/if}
	<Toolbar bind:bodyVisible bind:editUrl cardId={cardId}  removeRecord={removeRecord} />
</div>

<style>
	
	.level900{
		background:#1E3A8A;
	}
	.level700{
		background:#1D4ED8;
	}
	.level500{
		background:#3B82F6
	}
	.level300{
		background:#7DD3FC;
	}

</style>

