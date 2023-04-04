<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let name = "";
  export let value = "";

  const dispatch = createEventDispatcher<{ input: string }>();
</script>

<label for={name}><slot /></label>
<input
  on:input={(e) => setTimeout(() => dispatch("input", value), 0)}
  id={name}
  {name}
  class="w-full border border-dark accent-primary rounded"
  type="text"
  bind:value
/>
