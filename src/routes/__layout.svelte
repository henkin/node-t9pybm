<script>
  import NavMenu from "$lib/NavMenu.svelte";
  import { page } from "$app/stores";
</script>

<NavMenu />

<main>
  <p>hitting {$page.url.pathname}</p>

  <slot />
</main>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    padding: 4rem;
  }
</style>
