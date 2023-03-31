<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import VideoCard from "../molecules/video-card.svelte";

  export let videos: CollectionEntry<"video">[] = [];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
  {#each videos as video}
    <VideoCard {video} />
  {/each}
</div>

<style lang="scss">
</style>
