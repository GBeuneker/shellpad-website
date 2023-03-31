<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import ProjectList from "./project-list.svelte";

  export let game: CollectionEntry<"game">[];
  export let web: CollectionEntry<"web">[] = [];
  export let software: CollectionEntry<"software">[] = [];
  export let video: CollectionEntry<"video">[] = [];

  let filters = {
    game: false,
  };

  const projects = [...game, ...web, ...software, ...video];

  let filteredProjects = projects;

  function updateFilteredProjects() {
    filteredProjects = projects.filter((x) => {
      if (filters.game) {
        return x.collection === "game";
      }
      return true;
    });
  }
</script>

<div class="flex ">
  <div>
    {filteredProjects.length}
    {filters.game}
    <input
      type="checkbox"
      on:change={(e) => {
        setTimeout(() => updateFilteredProjects(), 0);
      }}
      bind:checked={filters["game"]}
    />
  </div>
  <div>
    <ProjectList projects={filteredProjects} />
  </div>
</div>

<style lang="scss">
</style>
