import { Edge } from "./edge";
import { BgColor } from "./options";

export interface SubgraphOptions {
    readonly bgcolor: BgColor;
}

export interface Subgraph {
    readonly edges: ReadonlyArray<Edge>;
    readonly options?: SubgraphOptions;
    readonly isCluster: boolean;
}

export function subgraph(edges: ReadonlyArray<Edge>, options?: SubgraphOptions): Subgraph {
    return { edges, options, isCluster: false };
}

export function cluster(edges: ReadonlyArray<Edge>, options?: SubgraphOptions): Subgraph {
    return { edges, options, isCluster: true };
}
