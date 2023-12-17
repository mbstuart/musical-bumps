<script lang="ts">
    import { writable } from 'svelte/store';

    let 

    let timeBetweenBumpsInSeconds = 20;
    let bumpMarginInSeconds = 3;

</script>

<section>
	<h2>Average # seconds between bumps</h2>
	<div>
		<input type="number" bind:value={timeBetweenBumpsInSeconds} min="10" max="60" />
	</div>
	<div>
		<input type="range" bind:value={timeBetweenBumpsInSeconds} min="10" max="60" />
	</div>
</section>

<section>
	<h2>Margin of uncertainty between bumps (higher = more random)</h2>
	<div>
		<input type="number" bind:value={bumpMarginInSeconds} min="0" max="{timeBetweenBumpsInSeconds / 2}" />
	</div>
	<div>
		<input type="range" bind:value={bumpMarginInSeconds} min="0" max="{timeBetweenBumpsInSeconds / 2}" />
	</div>
</section>