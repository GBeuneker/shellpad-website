<script lang="ts">
  export let color: "dark" | "light" = "dark";
</script>

<div class:light={color === "light"} class="flex items-center w-full max-w-xs my-6">
  <hr />
  <img class="h-8 mx-2" src="/shellpad_shell.svg" alt="shell" />
  <hr />
</div>

<style lang="scss">
  .light {
    hr {
      @apply bg-white;
    }
  }

  hr {
    @apply h-1 bg-dark rounded flex-grow border-none;
  }
</style>
