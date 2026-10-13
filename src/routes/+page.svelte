<h1>Graph:</h1>
<script>
  import graph from 'src/lib/graph.json';

  const vertices = graph[0];
</script>

<h1>Graph Lang</h1>

{#each vertices as vertex, index}
  <a href="/{index}">{vertex}</a>
{/each}
