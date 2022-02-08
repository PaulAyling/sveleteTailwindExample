<script>
	export let cardId;
	export let bodyVisible;
	export let editUrl;
	export let colorShade;
	export let removeRecord;
	export let cols;
	export let toggleCols;
	import { cards } from './stores/cards';
	import Fa from 'svelte-fa';
	import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

	import Input from './furniture/Input.svelte';
	import Toolbar from './furniture/buttons/Toolbar.svelte';
</script>

<div class="flex flex-col flex-start p-2 items-center">
	<div class="mr-2  flex flex-row">
		<Fa class="text-blue-200" icon={faGripVertical} />
	{#if editUrl == false}
		<Input bind:inputText={$cards[cardId].title} inputPlaceholder="Enter title" {colorShade} />
	{:else}
		<Input bind:inputText={$cards[cardId].url} inputPlaceholder="Enter url" {colorShade} />
	{/if}
	</div>

	<Toolbar bind:bodyVisible bind:editUrl {cardId} {removeRecord} bind:cols {toggleCols} />
</div>

<style>
	.level900 {
		background: #1e3a8a;
	}
	.level700 {
		background: #1d4ed8;
	}
	.level500 {
		background: #3b82f6;
	}
	.level300 {
		background: #7dd3fc;
	}
</style>
