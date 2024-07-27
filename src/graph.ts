import { Edge } from "./edge";
import { BgColor, generateStandaloneOptions, Style } from "./options";
import { Subgraph } from "./subgraph";
import { generateInternals } from "./utils";

export interface GraphOptions {
    readonly scale?: number;
    readonly style?: Style;
    readonly bgcolor?: BgColor;
}

export interface Graph {
    readonly internals: ReadonlyArray<Edge | Subgraph>;
    readonly options?: GraphOptions;
    readonly isDirected: boolean;
}

export function graph(internals: ReadonlyArray<Edge | Subgraph>, options?: GraphOptions): Graph {
    return { internals, options, isDirected: false };
}

export function digraph(internals: ReadonlyArray<Edge | Subgraph>, options?: GraphOptions): Graph {
    return { internals, options, isDirected: true };
}

export function generate(graph: Graph): string {
    const keyword = graph.isDirected ? 'digraph' : 'graph';
    const options = graph.options ? generateStandaloneOptions(graph.options, 1) : '';
    const internals = generateInternals(graph.internals, graph.isDirected, 1);
    return `${keyword} {\n${options}${internals}\n}`;
}
