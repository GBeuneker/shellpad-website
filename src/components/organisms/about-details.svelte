<script lang="ts">
  import ProgressBar from "../atoms/progress-bar.svelte";
  import SkillList from "../molecules/skill-list.svelte";

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
      fill: 0.6,
    },
    {
      label: "Python",
      fill: 0.4,
    },

    {
      label: "PHP",
      fill: 0.2,
    },
  ];

  const frameworks: { label: string; fill: number }[] = [
    {
      label: "Angular",
      fill: 1,
    },
    {
      label: "React",
      fill: 0.7,
    },
    {
      label: "Vue",
      fill: 0.5,
    },
    {
      label: "Svelte",
      fill: 0.5,
    },
    {
      label: "Unity",
      fill: 1,
    },
    {
      label: "Astro",
      fill: 0.4,
    },
  ];

  const software: { label: string; fill: number }[] = [
    {
      label: "Adobe Premiere",
      fill: 0.8,
    },
    {
      label: "Adobe After Effects",
      fill: 0.8,
    },
    {
      label: "Adobe Photoshop",
      fill: 0.5,
    },
    {
      label: "Adobe Illustrator",
      fill: 0.8,
    },
    {
      label: "Blender",
      fill: 0.8,
    },
    {
      label: "DaVinci Resolve",
      fill: 0.2,
    },
  ];
</script>

<div>
  <p class="mb-10">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod enim amet odio ea aliquam adipisci fugit, tenetur
    excepturi recusandae, ipsa exercitationem voluptatem labore, aperiam facilis perferendis ipsum. Iure, minus
    repudiandae?
  </p>

  <h3 class="my-5">Programming</h3>
  <SkillList skills={programmingSkills} />

  <h3 class="my-5">Frameworks/Engines</h3>
  <SkillList skills={frameworks} />

  <h3 class="my-5">Software</h3>
  <SkillList skills={software} />
</div>
