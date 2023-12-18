<script lang="ts">

import { onMount } from "svelte";
export let queue: {queue: {name}[]};

</script>

<section>
    {#each (queue?.queue || []) as queueItem}
    <span>{queueItem.name}</span>
  {/each}
</section>