<script lang="ts">
  import Divider from "../atoms/divider.svelte";
  export let title = "";
  export let color: "white" | "green" = "white";
</script>

<div class:bg-primary-dark={color === "green"} class:text-light={color === "green"} class="  py-12">
  <div class="container flex flex-col items-center">
    <h2 class="text-4xl">{title}</h2>
    <Divider />
    <slot />
  </div>
</div>

<style lang="scss">
</style>
