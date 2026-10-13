import graph from '../../lib/graph.json';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  const index = Number(params.vertex);
  const vertices = graph[0];

  if (
    !/^(0|[1-9]\d*)$/.test(params.vertex) ||
    index >= vertices.length
  ) {
    error(404, 'Vertex not found');
  }

  return {
    vertex: vertices[index],
    index
  };
}
