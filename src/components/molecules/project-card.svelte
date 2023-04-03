<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import FormattedDate from "../atoms/formatted-date.svelte";

  export let projectEntry:
    | CollectionEntry<"game">
    | CollectionEntry<"web">
    | CollectionEntry<"software">
    | CollectionEntry<"video">;

  function imageSrc() {
    if (projectEntry.collection === "video") {
      return `https://img.youtube.com/vi/${projectEntry.data.videoId}/0.jpg`;
    }

    return projectEntry.data.heroImage;
  }
</script>

<a
  href={`/projects/${projectEntry.collection}/${projectEntry.slug}/`}
  class="p-5 rounded-xl transition-all hover:shadow-lg  "
>
  <img class="object-cover w-full aspect-video" src={imageSrc()} alt="project" />
  <p class="mb-2">Date published: <FormattedDate date={projectEntry.data.pubDate} /></p>
  <h4>{projectEntry.data.title}</h4>
  <p>{projectEntry.data.description}</p>
</a>
