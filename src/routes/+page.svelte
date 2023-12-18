<script>
    import WebPlayback from '../lib/player/WebPlayback.svelte';
    import BasicPlayer from '../lib/player/BasicPlayer.svelte';
    const client_id = 'd2e3a244ff584fd2abdd4f395bcb7a7d';
    import classes from 'svelte-transition-classes';
  </script>

<section in:classes="{{
  duration: 100,
  base: 'transition ease-out duration-100',
  from: 'transform opacity-0 scale-95',
  to: 'transform opacity-100 scale-100',
}}" class="sm:container mx-auto my-4 bg-slate-200 p-4 md:rounded bg-blend-color-burn">
  <h1 class="text-3xl font-bold underline text-center ">Disk Jockey</h1>
  <WebPlayback {client_id} >
      <BasicPlayer slot="player" let:queue let:player let:state {player} {queue} {state} />
  </WebPlayback>   
  
</section>
