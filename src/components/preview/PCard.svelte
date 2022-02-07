<script>
	export let cardId;
	import { cards } from '../stores/cards';
	import { nodes } from '../stores/cardLayout';
	import PNotes from './PNotes.svelte';
	import Tags from '../Tags.svelte'
	console.log('cardId', cardId);
	cards.subscribe((value) => {
		console.log('STORE:CARDS:', value[cardId]);
	});

	$: imageUrl = $cards[cardId].imageUrl;
	$: title = $cards[cardId].title;
	$: notes = $cards[cardId].notes;
	// console.log(imageUrl,title,notes)
	const colorShade = 1;
</script>

<article class="p-5 rounded-md  level1">
		<header class="flex flex-row flex-start p-2 items-center">
			<a class="text-green-400 p-2 w-full hover:underline hover:underline-offset-4 " href="url"
				>{title}</a
			>
<Tags {cardId}/>
		</header>
		<body>
			<img src={imageUrl} alt={title} class="image rounded-md" style="width:100%" />
			<PNotes {notes} {colorShade} />

			<section class="bg-green-400 h-48 w-full p-10  rounded-md">something</section>

			<body />
		</body>

</article>
