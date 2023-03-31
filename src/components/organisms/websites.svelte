<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import GameCard from "../molecules/project-card.svelte";

  export let games: CollectionEntry<"game">[] = [];
</script>

<div>
  <h3>Games</h3>

  <div class="grid grid-cols-3">
    {#each games as game}
      <GameCard projectEntry={game} />
    {/each}
  </div>
</div>

<style lang="scss">
</style>
