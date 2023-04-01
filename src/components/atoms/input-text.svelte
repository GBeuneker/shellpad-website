<script lang="ts">
  export let name = "";
  export let value = "";
</script>

<label for={name}><slot /></label>
<input id={name} {name} class="w-full border border-dark accent-primary rounded" type="text" bind:value />
