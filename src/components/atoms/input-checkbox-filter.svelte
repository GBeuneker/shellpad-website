<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import InputCheckbox from "./input-checkbox.svelte";

  const dispatch = createEventDispatcher<{ checked: boolean }>();
  export let amount = 0;
</script>

<label class="text-lg flex items-center whitespace-nowrap gap-1 select-none hover:cursor-pointer">
  <InputCheckbox on:checked={(e) => dispatch("checked", e.detail)} />
  <slot />
  ({amount})
</label>
