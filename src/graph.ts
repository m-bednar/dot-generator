import { Edge } from "./edge";

export interface GraphOptions {}

export interface Graph {
    readonly edges: ReadonlyArray<Edge>;
    readonly options?: GraphOptions;
    readonly isDirected: boolean;
}

export function graph(edges: ReadonlyArray<Edge>, options?: GraphOptions): Graph {
    return { edges, options, isDirected: false };
}

export function digraph(edges: ReadonlyArray<Edge>, options?: GraphOptions): Graph {
    return { edges, options, isDirected: true };
}
