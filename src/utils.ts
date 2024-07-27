import { generateNode, GraphNode } from "./node";
import { generateSubgraph } from "./subgraph";
import { Subgraph } from "./subgraph";

const INDENT_SIZE = 2;

export function makeIndent(indent: number) {
    return ' '.repeat(INDENT_SIZE).repeat(indent);
}

export function isSubgraph(internal: GraphNode | Subgraph): internal is Subgraph {
    return 'internals' in internal;
}

export function isNode(internal: GraphNode | Subgraph): internal is GraphNode {
    return !isSubgraph(internal);
}

export function generateInternals(internals: ReadonlyArray<GraphNode | Subgraph>, isDirected: boolean, indent: number): string {
    const subgraphs = internals.filter(isSubgraph);
    const nodes = internals.filter(isNode);
    const generatedNodes = nodes.map(node => generateNode(node, indent));
    const generatedSubgraphs = subgraphs.map(subgraph => generateSubgraph(subgraph, isDirected, indent));
    return [...generatedNodes, ...generatedSubgraphs].join(';\n');
}