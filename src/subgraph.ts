import { Edge } from "./edge";
import { BgColor } from "./options";

export interface SubgraphOptions {
    readonly label?: string;
    readonly bgcolor?: BgColor;
}

export interface Subgraph {
    readonly internals: ReadonlyArray<Edge | Subgraph>;
    readonly options?: SubgraphOptions;
    readonly isCluster: boolean;
}

export function subgraph(internals: ReadonlyArray<Edge | Subgraph>, options?: SubgraphOptions): Subgraph {
    return { internals, options, isCluster: false };
}

export function cluster(internals: ReadonlyArray<Edge | Subgraph>, options?: SubgraphOptions): Subgraph {
    return { internals, options, isCluster: true };
}
