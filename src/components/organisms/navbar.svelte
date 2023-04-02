<script>
  export let url = "";
</script>

<nav class="fixed top-0 w-full flex gap-2 justify-center text-xl bg-light text-dark shadow py-2 z-50">
  <a href="/" class:active={url === "/"}>Home</a>
  <a
    href="/projects"
    class:active={url.includes("/projects") ||
      url.includes("/game") ||
      url.includes("/web") ||
      url.includes("/software") ||
      url.includes("/video")}>Projects</a
  >
  <a href="/about" class:active={url.includes("/about")}>About</a>
</nav>

<style lang="scss">
  a {
    @apply transition-all font-bold;
    &.active,
    &:hover {
      @apply text-primary;
    }
  }
</style>
