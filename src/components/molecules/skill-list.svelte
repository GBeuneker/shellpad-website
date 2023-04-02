<script lang="ts">
  import ProgressBar from "../atoms/progress-bar.svelte";

  export let skills: { label: string; fill: number }[] = [];
</script>

<div class="flex font-bold">
  <span class="w-36">Language</span>
  <span>Proficiency</span>
</div>
<hr class="mb-2" />
{#each skills.sort((a, b) => b.fill - a.fill) as skill}
  <div class="flex items-center">
    <p class="w-36 text-xl">{skill.label}</p>

    <span>Low</span>
    <div class="mx-1 w-full">
      <ProgressBar fill={skill.fill} />
    </div>
    <span>High</span>
  </div>
{/each}
