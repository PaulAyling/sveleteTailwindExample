<script>
	export let imageUrl;
	export let title;
    export let colorShade;
    import Input from './Input.svelte'
</script>

<div class="container hoverwrap rounded-md max-w-6xl p-2 min-h-48">
    <img  src={imageUrl} alt={title} class="image rounded-md" style="width:100%">
    <div class="middle">
      <div class="text">Change Image</div>
      <Input bind:inputText={imageUrl} inputPlaceholder='myurl' colorShade={colorShade}/>
    </div>
  </div>
<style>
.container {
  position: relative;

}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background-color: #22c55e;
  border-radius:10px;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
    
</style>
