<script>
	export let data
	console.log(data);
</script>

<svelte:head>
	<title>Halo</title>
	<meta name="description" content="Hallloo" />
</svelte:head>

<section>
	<h1>Halo 5</h1>
	<p>Join the Banished. In Operation: Banished Honor, liberate yourself through the teachings of Atriox and claim your spoils. The free 20-tier Operation Pass is full of powerful customization rewards to overcome your foes. Upgrade to the Premium Pass to obtain the Legendary Armor Coating, Fuego Flame, and strike fear into the hearts of your opponents. The Premium Pass comes with an additional Challenge Slot, bonus XP, and never expires.</p>
	<button>JOIN NOW</button>

</section>

<!-- {#each data.weapons as weapon}
	<p>{weapon.name}</p>
	<img src="{weapon.smallIconImageUrl}" alt="">
{/each} -->

<style>

	section{
		background-image: url(Halo-Banished.avif);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height: 1000px;
		position: relative;

		&:after{
			content: "";
			width: 100%;
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;

			background: rgb(0,0,0);
			background: linear-gradient(90deg, rgba(0,0,0,1) 3%, rgba(0,0,0,0.1386204139859069) 40%, rgba(255,255,255,0) 100%);

		}

		
	}
</style>
