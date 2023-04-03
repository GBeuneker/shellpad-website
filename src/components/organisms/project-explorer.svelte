<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import { onMount } from "svelte";
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
  type SearchFilter = { filter: Filter; active: boolean };

  const projects: Project[] = [...game, ...web, ...software, ...video];
  let showFilters = true;

  $: search = "";

  $: filters = {
    game: { filter: (input: Project) => input.collection === "game", active: false },
    web: { filter: (input: Project) => input.collection === "web", active: false },
    software: { filter: (input: Project) => input.collection === "software", active: false },
    video: { filter: (input: Project) => input.collection === "video", active: false },
  } as {
    game: SearchFilter;
    web: SearchFilter;
    software: SearchFilter;
    video: SearchFilter;
  };

  $: filteredProjects = projects
    .filter((x) => {
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
    })
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  $: peekFilter = (filter: Filter) => {
    return filteredProjects.filter(filter);
  };

  onMount(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.forEach((value, key, _) => {
      if (key === "game" || key === "web" || key === "software" || key === "video") {
        filters[key].active = value === "true";
      }

      if (key === "search") {
        search = value;
      }
    });
  });

  function setQueryParam(key: string, value: string) {
    const urlParams = new URLSearchParams(window.location.search);
    if (value) {
      urlParams.set(key, value);
    } else {
      urlParams.delete(key);
    }

    let url = window.location.pathname;
    let params = urlParams.toString();

    if (params) {
      url += `?${params}`;
    }

    window.history.replaceState(null, "", url);

    window.history.replaceState(null, "", url);
  }

  function setFilter(key: "game" | "web" | "software" | "video", active: boolean) {
    setQueryParam(key, active ? active.toString() : "");
    filters[key].active = active;
  }

  function setSearch(input: string) {
    setQueryParam("search", input);
    search = input;
  }
</script>

<div class="relative flex gap-2">
  <div>
    <div class="sticky top-16">
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
          checked={filters.game.active}
          on:checked={(e) => setFilter("game", e.detail)}
          amount={peekFilter(filters.game.filter).length}>Games</InputCheckboxFilter
        >
        <InputCheckboxFilter
          checked={filters.web.active}
          on:checked={(e) => setFilter("web", e.detail)}
          amount={peekFilter(filters.web.filter).length}>Web</InputCheckboxFilter
        >
        <InputCheckboxFilter
          checked={filters.software.active}
          on:checked={(e) => setFilter("software", e.detail)}
          amount={peekFilter(filters.software.filter).length}>Software</InputCheckboxFilter
        >
        <InputCheckboxFilter
          checked={filters.video.active}
          on:checked={(e) => setFilter("video", e.detail)}
          amount={peekFilter(filters.video.filter).length}>Video</InputCheckboxFilter
        >

        <InputText name="search" on:input={(e) => setSearch(e.detail)} bind:value={search}
          ><span class="font-bold">Search</span></InputText
        >
      </div>
    </div>
  </div>
  <div>
    <ProjectList projects={filteredProjects} />
  </div>
</div>

<style lang="scss">
</style>
