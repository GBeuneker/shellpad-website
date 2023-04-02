<script lang="ts">
  export let segments = 0;
  export let fill = 0.5;
  $: style = `width: ${Math.max(0, Math.min(fill * 100, 100))}%`;
</script>

<div class="relative w-full bg-light rounded-full h-5 overflow-hidden">
  <div class="progress-bar--fill origin-left bg-primary h-full transition-all" {style} />
  <div class="absolute top-0 w-full h-5 flex justify-between">
    {#each { length: segments } as _, i}
      <div class:invisible={i === 0 || i === segments - 1} class="w-[2px] bg-primary-darker h-full rounded-full" />
    {/each}
  </div>
</div>

<style lang="scss">
  @keyframes fillUp {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  .progress-bar--fill {
    animation: fillUp 1s ease-in-out;
  }
</style>
