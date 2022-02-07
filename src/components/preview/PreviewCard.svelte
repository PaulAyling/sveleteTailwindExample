<script>
	export let cardId;
	import { cards } from '../stores/cards';
    import { nodes } from '../stores/cardLayout'
    console.log('cardId',cardId)
    cards.subscribe((value) => {
		console.log('STORE:CARDS:', value[cardId]);
	});

    // $:imageUrl = $cards[cardId].imageUrl
    // $:title = $cards[cardId].title
    // $:notes = $cards[cardId].notes
    // console.log(imageUrl,title,notes)
</script>

<section class="'p-2 rounded-md  level1'">
	<header class="flex flex-row flex-start p-2 items-center">
		<p class="text-green-400 rounded p-1 w-full flex-grow level1">Title</p>
	</header>
	<body>
		<div class="container hoverwrap rounded-md max-w-6xl p-2 min-h-48">
			<!-- <img src={imageUrl} alt={title} class="image rounded-md" style="width:100%" /> -->
		</div>
		<body />
	</body>
</section>
