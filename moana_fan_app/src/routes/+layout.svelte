<svelte:head>
  <link rel="stylesheet" href="node_modules/modern-normalize/modern-normalize.css">
</svelte:head>

<script>
  import '../theme.css';
</script>

<slot></slot>

<style>
  :global(body) {
    overflow-x: hidden;
  }
</style>
