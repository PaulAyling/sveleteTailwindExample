<script>
	export let imageUrl;
	export let title;
</script>

<!-- <div class="rounded-md max-w-6xl p-2">
        <img class="bg-cover  rounded-md" 
        src="{imageUrl}" 
        alt="{title}">
    </div> -->

<div class="hoverwrap rounded-md max-w-6xl p-2">
	<img class="bg-cover  hover:opacity-75 rounded-md" src={imageUrl} alt={title} />
	<div class="hovercap hover:bg-green-500 ">Change image</div>
</div>


<style>

    /* TODO improve this to use css background for the image and then can insert imagge within div making no gap under this div */
	.hoverwrap {
		position: relative;
	}
	.hovercap:hover {
		background: #22c55e;
	}
	.hovercap:click {
		background: #22d3ee;
	}

	/* (B) RESPONSIVE IMAGE */
	.hoverwrap img {
		width: 100%;
	}

	/* (C) CAPTION */
	.hovercap {
		/* (C1) DIMENSIONS */
		box-sizing: border-box;
		width: 100%;
		padding: 10px;
		/* (C2) BOTTOM */
		position: relative;
		bottom: 100px;
		/* (C3) COLORS */
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
	}

	/* (D) SHOW/HIDE */
	.hovercap {
		visibility: none;
		opacity: 0;
		transition: opacity 0.3s;
	}
	.hoverwrap:hover .hovercap {
		visibility: visible;
		opacity: 1;
	}
</style>
