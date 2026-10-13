# (0.0) Introduction 

## (0.1) What is Graph Lang
Graph Lang is an experimental graph-based programming language. 
Its initial intermediate representation (IR) is an adjacency matrix,
expressed as a tuple of a vertex vector and morphism matrix: ((vertices) (morphisms)),
inspired in part by [Design Structure Matrices (DSM's)](https://en.wikipedia.org/wiki/Design_structure_matrix).

## (0.2) Motivations
Other influences include Judea Pearl's work on causal networks and reasoning, category
theory and ologs, and Lisp's homoiconicity. Directed acyclic graphs
(DAGs) like OKRs or org charts, and systems like Git further demonstrate
the leverage of simple relationships.

## (0.3) Status
The first implementation will use [SvelteKit](https://svelte.dev/docs/kit/introduction)
to render navigable graphs in the browser. Current research involves graph evaluation
and transformation. Both the implementation and research are free and open source, and open to collaboration.
