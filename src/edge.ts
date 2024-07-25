import { generateArgumentOptions } from "./options";
import { makeIndent } from "./utils";
import { GraphNode } from "./node";
import { Color, Style } from "./options";

export interface EdgeOptions {
    readonly color?: Color;
    readonly style?: Style;
}

export interface Edge {
    readonly source: GraphNode;
    readonly destination: GraphNode;
    readonly options?: EdgeOptions;
}

export function edge(source: GraphNode, destination: GraphNode, options?: EdgeOptions): Edge {
    return { source, destination, options };
}

export function getNodes(edges: ReadonlyArray<Edge>): ReadonlyArray<GraphNode> {
    const nodes = edges.flatMap(edge => [edge.source, edge.destination]);
    return [...new Set(nodes)];
}

export function generateEdge(edge: Edge, isDirected: boolean, indent: number): string {
    const notation = isDirected ? '->' : '--';
    const options = edge.options ? generateArgumentOptions(edge.options) : '';
    return `${makeIndent(indent)}${edge.source.id} ${notation} ${edge.destination.id} ${options}`;
}
