<script lang="ts">
  import FormattedDate from "../atoms/formatted-date.svelte";
  import Section from "./section.svelte";

  export let title = "";
  export let date: Date;
  export let heroImage = "";
</script>

<article id="project">
  <Section {title} color="green">
    <div class="mx-auto max-w-3xl">
      <img class="mx-auto" src={heroImage} alt="" />
      <p class="mb-5 text-center">Date published: <FormattedDate {date} /></p>
      <slot />
    </div>
  </Section>
</article>
