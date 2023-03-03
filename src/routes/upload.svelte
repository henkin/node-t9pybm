<script>
  import { uploading } from "$lib/stores";
  let files;
  let promise;
  $: if (files) {
    // Note that `files` is of type `FileList`, not an Array:
    // https://developer.mozilla.org/en-US/docs/Web/API/FileList
    console.log(files);
  }

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


  const handleUpload = async () => {
    if(!files) return
    
    await timeout(3000)
    const res = await fetch(`/api/upload`, {
      method: "post",
      body: JSON.stringify(files),
    });

    const data = await res.json();
    return data;
  };
</script>

{files}
<h1 style="margin-top: 1rem;">Upload file</h1>
{#await handleUpload()}
  <p>...waiting</p>
{:then data}
  {#if data}
    <p>{data.video}</p>
  {/if}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

{#if !$uploading}
  <p style="margin-bottom: 2rem;">
    <label for="avatar">Upload a video:</label>
    <input
      accept="video/mp4,video/x-m4v,video/*"
      bind:files
      id="picture"
      name="picture"
      type="file"
      style="width: 100%;"
    />
  </p>


  {#if files}
    <h2 style="margin-top:4rem;">Selected files:</h2>
    {#each Array.from(files) as file}
      <p>{file.name} ({file.size} bytes)</p>
    {/each}

    <button on:click|preventDefault={handleUpload}>Upload </button>
  {/if}
{/if}

<style>
  button {
    padding: 1rem 0.4rem;
    border: none;
    background-color: mediumseagreen;
    color: white;
    margin-block: 1rem 2rem;
  }
</style>
