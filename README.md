# DOT Generator

Generator for Graphviz's DOT language written in Typescript. 

## Usage

### Basic graph
```typescript
import { generate, graph, edge, node } from 'dot-generator'

const a = node('A')
const b = node('B', { bgcolor: 'red', })
const c = node('C', { shape: 'rectangle' })

const g = graph([
    edge(a, b),
    edge(a, c),
])

console.log(generate(g))
```

### Directed graph
```typescript
// same as previously...

const g = digraph([
    edge(a, b),
    edge(a, c),
])

console.log(generate(g))
```

### Subgraph / Cluster
```typescript
import { generate, graph, edge, node, subgraph, cluster } from 'dot-generator'

const a = node('A')
const b = node('B', { bgcolor: 'red', })
const c = node('C', { shape: 'rectangle' })
const d = node('D')

const g = graph([
    edge(a, b),
    subgraph([
        edge(b, c)
    ]),
    cluster([
        edge(c, d)
    ])
])

console.log(generate(g))
```