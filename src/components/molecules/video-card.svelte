<script lang="ts">
  import type { CollectionEntry } from "astro:content";

  export let video: CollectionEntry<"video">;
</script>

<a href={`/${video.collection}/${video.slug}/`} class="p-5 rounded-xl transition-all hover:shadow-lg  ">
  <img class="w-full aspect-video" src={`https://img.youtube.com/vi/${video.data.videoId}/0.jpg`} alt="project" />
  <h4>{video.data.title}</h4>
  <p>{video.data.description}</p>
</a>
