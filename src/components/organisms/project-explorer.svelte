<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import InputCheckboxFilter from "../atoms/input-checkbox-filter.svelte";
  import InputText from "../atoms/input-text.svelte";
  import ProjectList from "./project-list.svelte";

  export let game: CollectionEntry<"game">[];
  export let web: CollectionEntry<"web">[] = [];
  export let software: CollectionEntry<"software">[] = [];
  export let video: CollectionEntry<"video">[] = [];

  type Project =
    | CollectionEntry<"game">
    | CollectionEntry<"web">
    | CollectionEntry<"software">
    | CollectionEntry<"video">;
  type Filter = (input: Project) => boolean;

  const projects: Project[] = [...game, ...web, ...software, ...video];
  let search = "";
  let showFilters = true;

  $: filters = {
    game: { filter: (input: Project) => input.collection === "game", active: false },
    web: { filter: (input: Project) => input.collection === "web", active: false },
    software: { filter: (input: Project) => input.collection === "software", active: false },
    video: { filter: (input: Project) => input.collection === "video", active: false },
  };

  $: filteredProjects = projects.filter((x) => {
    let result = true;

    Object.values(filters).forEach((filterValue) => {
      if (filterValue.active) {
        result = result && filterValue.filter(x);
      }
    });

    if (search) {
      result =
        result &&
        (x.data.title.toLowerCase().includes(search.toLowerCase()) ||
          x.data.description.toLowerCase().includes(search.toLowerCase()));
    }

    return result;
  });

  function peekFilter(filter: Filter) {
    return filteredProjects.filter(filter);
  }
</script>

<div class="relative flex gap-2">
  <div>
    <div class="sticky top-2">
      <button
        class="md:hidden w-8 h-8 absolute -right-2 translate-x-full top-0 hover:bg-primary-lighter rounded-full transition-all p-1 flex items-center justify-center bg-light"
        class:rotate-180={!showFilters}
        on:click={(_) => (showFilters = !showFilters)}
        ><img class="h-full" src="/chevron-left-solid.svg" alt="sliders" /></button
      >

      <div class="md:!block" class:hidden={!showFilters}>
        <span class="font-bold text-lg">Filters</span>
        <hr class="mb-2" />

        <span class="font-bold text">Categories</span>

        <InputCheckboxFilter
          on:checked={(e) => (filters.game.active = e.detail)}
          amount={peekFilter(filters.game.filter).length}>Games</InputCheckboxFilter
        >
        <InputCheckboxFilter
          on:checked={(e) => (filters.web.active = e.detail)}
          amount={peekFilter(filters.web.filter).length}>Web</InputCheckboxFilter
        >
        <InputCheckboxFilter
          on:checked={(e) => (filters.software.active = e.detail)}
          amount={peekFilter(filters.software.filter).length}>Software</InputCheckboxFilter
        >
        <InputCheckboxFilter
          on:checked={(e) => (filters.video.active = e.detail)}
          amount={peekFilter(filters.video.filter).length}>Video</InputCheckboxFilter
        >

        <InputText name="search" bind:value={search}><span class="font-bold">Search</span></InputText>
      </div>
    </div>
  </div>
  <div>
    <ProjectList projects={filteredProjects} />
  </div>
</div>

<style lang="scss">
</style>
