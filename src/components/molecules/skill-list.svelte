<script lang="ts">
  import ProgressBar from "../atoms/progress-bar.svelte";

  export let skills: { label: string; fill: number }[] = [];
</script>

<div class="flex font-bold">
  <span class="w-36">Language</span>
  <span>Proficiency</span>
</div>
<hr class="mb-2" />
<div class="ml-36 grid grid-cols-5 place-items-center sm:text-base text-[0.6rem]">
  <span>Bad</span>
  <span>Poor</span>
  <span>Fair</span>
  <span>Good</span>
  <span>Excellent</span>
</div>

{#each skills.sort((a, b) => b.fill - a.fill) as skill}
  <div class="flex items-center">
    <p class="w-36">{skill.label}</p>

    <div class="mx-1 flex-grow">
      <ProgressBar fill={skill.fill} segments={6} />
    </div>
  </div>
{/each}
