<script lang="ts">
  import FormattedDate from "../atoms/formatted-date.svelte";
  import Section from "./section.svelte";

  export let title = "";
  export let date: Date;
  export let videoId = "";
</script>

<article id="scrollTarget">
  <Section {title} color="green">
    <div class="mx-auto max-w-3xl">
      <iframe
        height="100%"
        width="100%"
        class="w-full aspect-video"
        {title}
        src={`https://www.youtube.com/embed/${videoId}`}
      />
      <p class="mb-5 text-center">Date published: <FormattedDate {date} /></p>

      <slot />
    </div>
  </Section>
</article>
