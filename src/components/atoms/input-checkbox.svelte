<script lang="ts">
  import { createEventDispatcher } from "svelte";

  let checked = false;
  const dispatch = createEventDispatcher<{ checked: boolean }>();
  function handleChanged() {
    dispatch("checked", checked);
  }
</script>

<input
  type="checkbox"
  class="w-5 h-5 accent-primary"
  on:change={(e) => {
    setTimeout(() => handleChanged(), 0);
  }}
  bind:checked
/>
