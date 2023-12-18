<script lang="ts">
	import { DEFAULT_BUMPS_CONFIG, type BumpsConfig } from '$lib/bumps-config';

	export let bumpsConfig: BumpsConfig = DEFAULT_BUMPS_CONFIG
    

</script>

<section>
	<h2>Average # seconds between bumps</h2>
	<div>
		<input type="number" bind:value={bumpsConfig.averageTimeInSeconds} min="10" max="60" />
	</div>
	<div>
		<input type="range" bind:value={bumpsConfig.averageTimeInSeconds} min="10" max="60" />
	</div>
</section>

<section>
	<h2>Margin of uncertainty between bumps (higher = more random)</h2>
	<div>
		<input type="number" bind:value={bumpsConfig.marginInSeconds} min="0" max="{bumpsConfig.averageTimeInSeconds / 2}" />
	</div>
	<div>
		<input type="range" bind:value={bumpsConfig.marginInSeconds} min="0" max="{bumpsConfig.averageTimeInSeconds / 2}" />
	</div>
</section>