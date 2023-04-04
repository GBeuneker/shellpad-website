<script lang="ts">
  import Section from "./section.svelte";
</script>

<div class="relative overflow-hidden bg-white">
  <div class="relative z-10 mb-24">
    <Section title="About">
      <div class="mx-auto grid md:grid-cols-2 max-w-3xl gap-4">
        <p>
          Shellpad Interactive founded in 2017 develops interactive experiences, games, tools and websites. We promise
          to deliver modular, scalable, high quality products and services.
        </p>
        <p>
          With an academic background in Computer Science and years of experience we work with you to ensure you get the
          product you need.
        </p>
      </div>
    </Section>
  </div>

  <img class="absolute left-0 bottom-2 h-32 -translate-x-[60%]" src="/shellpad_full_no_shadow.svg" alt="shellpad" />

  <div class="absolute right-[45px] bottom-[8px]" style="transform: rotateX(60deg)">
    {#each { length: 6 } as _, i}
      <div
        style="right: {i * 45}px; bottom: {i % 2 ? '22' : '0'}px; opacity: {1 - i / 10}"
        class="absolute bg-primary rounded-full h-5 w-5"
      />
    {/each}
  </div>

  <img class="absolute right-0 bottom-2 h-32 translate-x-[60%]" src="/shellpad_full_no_shadow.svg" alt="shellpad" />
</div>
