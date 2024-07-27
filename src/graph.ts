import { Edge, generateEdge } from "./edge";
import { GraphNode } from "./node";
import { BgColor, generateStandaloneOptions, Style } from "./options";
import { Subgraph } from "./subgraph";
import { generateInternals } from "./utils";

export interface GraphOptions {
    readonly scale?: number;
    readonly style?: Style;
    readonly bgcolor?: BgColor;
}

export interface Graph {
    readonly internals: ReadonlyArray<GraphNode | Subgraph>;
    readonly edges: ReadonlyArray<Edge>;
    readonly options?: GraphOptions;
    readonly isDirected: boolean;
}

export function generateEdges(edges: ReadonlyArray<Edge>, isDirected: boolean): string {
    return edges.map(edge => generateEdge(edge, isDirected, 1)).join(';\n')
}

export function graph(internals: ReadonlyArray<GraphNode | Subgraph>, edges: ReadonlyArray<Edge>, options?: GraphOptions): Graph {
    return { internals, edges, options, isDirected: false };
}

export function digraph(internals: ReadonlyArray<GraphNode | Subgraph>, edges: ReadonlyArray<Edge>, options?: GraphOptions): Graph {
    return { internals, edges, options, isDirected: true };
}

export function generate(graph: Graph): string {
    const keyword = graph.isDirected ? 'digraph' : 'graph';
    const options = graph.options ? generateStandaloneOptions(graph.options, 1) : '';
    const internals = generateInternals(graph.internals, graph.isDirected, 1);
    const edges = generateEdges(graph.edges, graph.isDirected);
    return `${keyword} {\n${options}${internals}\n${edges}\n}`;
}
