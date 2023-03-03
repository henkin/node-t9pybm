<script>
  import { page } from "$app/stores";
  let items = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/upload",
      title: "Upload",
    },
    {
      href: "/page/one",
      title: "Page 1",
    },
    {
      href: "/page/two",
      title: "Page 2",
    },
    {
      href: "/page/three",
      title: "Page 3",
    },
  ];
</script>

<div>
  {#each items as { href, title }}
    <a {href} class:active={$page.url.pathname === href}>{title}</a>
  {/each}
</div>

<style>
  div {
    padding: 10px;
    width: 100vw;
    display: flex;
    gap: 0.2rem;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .active {
    transition: background-color ease-in 0.15s, color ease-in-out 0.2s;
    background-color: cornflowerblue;
    color: white;
  }

  div > * {
    border: solid 2px blue;
    padding: 0.15rem;
  }
</style>
