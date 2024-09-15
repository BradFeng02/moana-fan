<svelte:head>
  <link rel="stylesheet" href="node_modules/modern-normalize/modern-normalize.css">
</svelte:head>

<script>
  import '../theme.css';
</script>

<nav>
    <a href="/">home</a>
    <a href="/test">test</a>
</nav>

<slot></slot>

<style>
  :global(body) {
    overflow-x: hidden;
  }
</style>
