import { generateNode } from "./node";
import { getNodes, generateEdge } from "./edge";
import { generateSubgraph } from "./subgraph";
import { Edge } from "./edge";
import { Subgraph } from "./subgraph";

const INDENT_SIZE = 2;

export function makeIndent(indent: number) {
    return ' '.repeat(INDENT_SIZE).repeat(indent);
}

export function isSubgraph(internal: Edge | Subgraph): internal is Subgraph {
    return 'internals' in internal;
}

export function isEdge(internal: Edge | Subgraph): internal is Edge {
    return !isSubgraph(internal);
}

export function generateInternals(internals: ReadonlyArray<Edge | Subgraph>, isDirected: boolean, indent: number): string {
    const subgraphs = internals.filter(isSubgraph);
    const edges = internals.filter(isEdge);
    const nodes = getNodes(edges);
    const generatedNodes = nodes.map(node => generateNode(node, indent));
    const generatedEdges = edges.map(edge => generateEdge(edge, isDirected, indent));
    const generatedSubgraphs = subgraphs.map(subgraph => generateSubgraph(subgraph, isDirected, indent));
    return [...generatedNodes, ...generatedEdges, ...generatedSubgraphs].join(';\n');
}