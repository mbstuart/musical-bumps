<script lang="ts">
	import { DEFAULT_BUMPS_CONFIG, type BumpsConfig } from '$lib/bumps-config';
    import { writable } from 'svelte/store';
	import { persisted } from 'svelte-persisted-store'


	export const persistedBumps = persisted('bumpsConfig', DEFAULT_BUMPS_CONFIG)
	let timeBetweenBumpsInSeconds;
	let bumpMarginInSeconds;
	persistedBumps.subscribe(config => {
		timeBetweenBumpsInSeconds = config.averageTimeInSeconds;
		bumpMarginInSeconds = config.marginInSeconds;
	})


	$: {
		persistedBumps.update(curr => ({
			...curr,
			averageTimeInSeconds: timeBetweenBumpsInSeconds,
			marginInSeconds: bumpMarginInSeconds
		}));
	}

	const onInput = (key: string) => (inputEvent) => {
		console.log(inputEvent)
		persistedBumps.update(curr => ({...curr, [key]: inputEvent.data}))
	}

</script>

<section>
	<h2>Average # seconds between bumps</h2>
	<div>
		<input type="number" value={timeBetweenBumpsInSeconds} on:input={onInput('averageTimeInSeconds')}  min="10" max="60" />
	</div>
</section>

<section>
	<h2>Margin of uncertainty between bumps (higher = more random)</h2>
	<div>
		<input type="number" value={bumpMarginInSeconds} on:input={onInput('marginInSeconds')}  min="0" max="{timeBetweenBumpsInSeconds / 2}" />
	</div>
</section>