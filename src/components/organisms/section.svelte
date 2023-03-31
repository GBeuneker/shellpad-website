<script lang="ts">
  import Divider from "../atoms/divider.svelte";

  export let title = "";
  export let color: "transparant" | "green" | "white" = "transparant";
</script>

<div
  class:bg-primary-dark={color === "green"}
  class:bg-white={color === "white"}
  class:text-light={color === "green"}
  class="py-12"
>
  <div class="container flex flex-col">
    <h2 class="text-center">{title}</h2>
    <div class="flex justify-center w-full">
      <Divider />
    </div>
    <slot />
  </div>
</div>

<style lang="scss">
</style>
