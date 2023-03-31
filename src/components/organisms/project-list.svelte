<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import ProjectCard from "../molecules/project-card.svelte";

  export let projects: CollectionEntry<"game">[] | CollectionEntry<"web">[] | CollectionEntry<"software">[] = [];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
  {#each projects as game}
    <ProjectCard projectEntry={game} />
  {/each}
</div>

<style lang="scss">
</style>
