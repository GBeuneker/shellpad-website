<script lang="ts">
  import SkillList from "../molecules/skill-list.svelte";
  import About from "./about.svelte";
  import Section from "./section.svelte";

  const programmingSkills: { label: string; fill: number }[] = [
    {
      label: "C#",
      fill: 1,
    },
    {
      label: "Typescript",
      fill: 1,
    },
    {
      label: "Javascript",
      fill: 1,
    },
    {
      label: "C++",
      fill: 0.55,
    },
    {
      label: "Python",
      fill: 0.44,
    },
    {
      label: "SQL",
      fill: 0.42,
    },
    {
      label: "PHP",
      fill: 0.35,
    },
    {
      label: "HLSL",
      fill: 0.3,
    },
    {
      label: "Haskell",
      fill: 0.1,
    },
  ];

  const frameworks: { label: string; fill: number }[] = [
    {
      label: "Angular",
      fill: 1,
    },
    {
      label: "Unity",
      fill: 1,
    },
    {
      label: "BabylonJS",
      fill: 0.7,
    },
    {
      label: "PixiJS",
      fill: 0.7,
    },
    {
      label: "React",
      fill: 0.5,
    },
    {
      label: "Vue",
      fill: 0.5,
    },
    {
      label: "Svelte",
      fill: 0.45,
    },
    {
      label: "Astro",
      fill: 0.45,
    },
    {
      label: "Game Maker Studio",
      fill: 0.35,
    },
    {
      label: "Unreal Engine",
      fill: 0.1,
    },
  ];

  const software: { label: string; fill: number }[] = [
    {
      label: "Adobe Photoshop",
      fill: 0.85,
    },
    {
      label: "DaVinci Resolve",
      fill: 0.78,
    },
    {
      label: "Adobe Premiere",
      fill: 0.78,
    },
    {
      label: "Adobe After Effects",
      fill: 0.75,
    },
    {
      label: "Adobe Illustrator",
      fill: 0.62,
    },
    {
      label: "Blender",
      fill: 0.5,
    },
  ];
</script>

<div class="max-w-3xl mx-auto">
  <p>
    When you're looking for interactive experiences, games, tools, or websites that meet your specific needs and
    preferences, you can count on Shellpad Interactive. We are a company that was founded in 2017 with the aim of
    providing high-quality products and services that are modular, scalable, and customized to meet your unique
    requirements.
  </p>
  <p>
    We take pride in our academic background in Computer Science, as well as our extensive experience in the field. With
    our expertise, we work closely with you to ensure that you receive the product that is tailored to your needs.
  </p>
  <p>
    At Shellpad Interactive, we are dedicated to delivering interactive experiences that will capture your imagination
    and provide you with an unparalleled level of entertainment. You can rely on us to exceed your expectations and make
    your vision a reality.
  </p>
</div>

<Section title="Skills">
  <div>
    <div class="max-w-3xl mx-auto">
      <h3 class="my-5">Programming</h3>
      <SkillList skills={programmingSkills} />

      <h3 class="my-5">Frameworks and Engines</h3>
      <SkillList skills={frameworks} />

      <h3 class="my-5">Software</h3>
      <SkillList skills={software} />
    </div>
  </div>
</Section>

<style lang="scss">
  p {
    @apply mb-5;
  }
</style>
