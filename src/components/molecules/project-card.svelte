<script lang="ts">
  import type { CollectionEntry } from "astro:content";

  export let projectEntry: CollectionEntry<"game"> | CollectionEntry<"web"> | CollectionEntry<"software">;
</script>

<a href={`/${projectEntry.collection}/${projectEntry.slug}/`} class="p-5 rounded-xl transition-all hover:shadow-lg  ">
  <img class="w-full aspect-video" src={projectEntry.data.heroImage} alt="project" />
  <h4>{projectEntry.data.title}</h4>
  <p>{projectEntry.data.description}</p>
</a>
