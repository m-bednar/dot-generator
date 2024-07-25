import { Edge } from "./edge";
import { Subgraph } from "./subgraph";

export interface GraphOptions {}

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
