<script>
	export let data
	// console.log(data);
</script>

<svelte:head>
	<title>Halo</title>
	<meta name="description" content="Mombasa of Halo" />
</svelte:head>

<section>
	<div class="overlay-text">		
		<h1>Halo 5</h1>
		<p>Mombasa Station is the place where you'll be able to find the top scorers in H5 leaderboards, track down your favorite weapon or just reminiscence the good 'ol RvB fights from back in the day.</p>
		<button>JOIN NOW</button>
	</div>
</section>

<!-- {#each data.weapons as weapon}
	<p>{weapon.name}</p>
	<img src="{weapon.smallIconImageUrl}" alt="">
{/each} -->

<style>

	.overlay-text {
		position: absolute; 
		z-index: 100;
		margin-left: 10%;
	}

	h1 {
		color: white;
		font-size: 2rem;
  		font-weight: 600;
	}

	p {
		color: var(--text-faded);
		font-size: 0.95rem;
		max-width: 700px;
		margin: 1rem 0;
		line-height: 1.5;
	}

	button {
		background: white;
		padding: 1rem 2rem;
		font-size: var(--font-size-button);
		border: none;
	}

	section {
		background-image: url(https://wpassets.halowaypoint.com/wp-content/2024/04/vNext-MBI-Infinite-Hero-Desktop-S7-R01-scaled.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height: 100dvh;
		position: relative;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		&:after{
			content: "";
			width: 80%;
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;

			background: rgb(0,0,0);
			background: linear-gradient(90deg, rgba(0,0,0,0.8547794117647058) 5%, rgba(0,0,0,0.8323704481792717) 30%, rgba(255,255,255,0) 70%); 

		}		
	}
</style>
