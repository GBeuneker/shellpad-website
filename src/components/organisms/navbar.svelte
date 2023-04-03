<script>
  export let url = "";
  let scrollY = window.scrollY;
</script>

<svelte:window bind:scrollY />
<nav
  class="transition-all fixed top-0 w-full flex gap-2 justify-center text-xl  text-dark py-2 z-50"
  class:nav--filled={scrollY > 10}
>
  <a href="/" class:active={url === "/"}>Home</a>
  <a href="/projects" class:active={url.includes("/projects")}>Projects</a>
  <a href="/about" class:active={url.includes("/about")}>About</a>
</nav>

<style lang="scss">
  .nav {
    &--filled {
      @apply bg-white shadow py-3;
    }
  }

  a {
    @apply transition-all font-bold;
    &.active,
    &:hover {
      @apply text-primary;
    }
  }
</style>
