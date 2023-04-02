<script lang="ts">
  export let fill = 0.5;
  $: style = `width: ${Math.max(0, Math.min(fill * 100, 100))}%`;
</script>

<div class="w-full bg-light rounded-full h-5 ">
  <div class="bg-primary h-full rounded-full  transition-all" {style} />
</div>
