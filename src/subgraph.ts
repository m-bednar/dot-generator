import { Color, generateStandaloneOptions, Style } from "./options";
import { makeIndent } from "./utils";
import { BgColor } from "./options";
import { generateInternals } from "./utils";
import { GraphNode } from "./node";

export interface SubgraphOptions {
    readonly label?: string;
    readonly style?: Style;
    readonly bgcolor?: BgColor;
    readonly fontcolor?: Color;
    readonly fontname?: string;
    readonly fontsize?: number;
    readonly cluster?: boolean;
}

export interface Subgraph {
    readonly internals: ReadonlyArray<GraphNode | Subgraph>;
    readonly options?: SubgraphOptions;
    readonly isCluster: boolean;
}

export function subgraph(internals: ReadonlyArray<GraphNode | Subgraph>, options?: SubgraphOptions): Subgraph {
    return { internals, options, isCluster: false };
}

export function cluster(internals: ReadonlyArray<GraphNode | Subgraph>, options?: SubgraphOptions): Subgraph {
    return { internals, options, isCluster: true };
}

let clusters = 0;
export function generateSubgraph(subgraph: Subgraph, isDirected: boolean, indent: number): string {
    const identifier = subgraph.isCluster ? `cluster${clusters++}` : '';
    const options = subgraph.options ? generateStandaloneOptions(subgraph.options, indent + 1) : '';
    const internals = generateInternals(subgraph.internals, isDirected, indent + 1);
    return `${makeIndent(indent)}subgraph ${identifier} {\n${options}${internals}\n${makeIndent(indent)}}`;
}

