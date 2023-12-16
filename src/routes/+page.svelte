<script>
    import { WebPlayback } from 'svelte-spotify-web-playback';
    import BasicPlayer from '../lib/player/BasicPlayer.svelte';
    const client_id = 'd2e3a244ff584fd2abdd4f395bcb7a7d';
  </script>
<h1>Welcome to SvelteKit</h1>
<WebPlayback {client_id} >
    <BasicPlayer slot="player" let:player let:state {player} {state} />
</WebPlayback>   
