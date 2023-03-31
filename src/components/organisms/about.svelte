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

  <img class="absolute left-0 bottom-2 h-32  -translate-x-[60%]" src="/shellpad_full_no_shadow.svg" alt="shellpad" />

  <div class="absolute right-[80px] bottom-[30px] bg-primary/70 rounded-full h-5 w-5" />
  <div class="absolute right-[120px] bottom-[8px] bg-primary/60 rounded-full h-5 w-5" />

  <div class="absolute right-[160px] bottom-[30px] bg-primary/50 rounded-full h-5 w-5" />
  <div class="absolute right-[200px] bottom-[8px] bg-primary/40 rounded-full h-5 w-5" />

  <div class="absolute right-[240px] bottom-[30px] bg-primary/30 rounded-full h-5 w-5" />
  <div class="absolute right-[280px] bottom-[8px] bg-primary/20 rounded-full h-5 w-5" />

  <div class="absolute right-[320px] bottom-[30px] bg-primary/10 rounded-full h-5 w-5" />

  <img class="absolute right-0 bottom-2 h-32  translate-x-[60%]" src="/shellpad_full_no_shadow.svg" alt="shellpad" />
</div>
