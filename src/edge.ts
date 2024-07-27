import { generateArgumentOptions } from "./options";
import { makeIndent } from "./utils";
import { GraphNode } from "./node";
import { Color, Style } from "./options";

export type ArrowType = "normal" | "inv" | "dot" | "invdot" | "odot" |"invodot" | "none" | 
    "tee" | "empty" |"invempty" | "diamond" |"odiamond" | "ediamond" | 
    "crow" | "box" |"obox" | "open" |"halfopen" | "vee";

export interface EdgeOptions {
    readonly label?: string;
    readonly color?: Color;
    readonly fontcolor?: Color;
    readonly fontname?: string;
    readonly fontsize?: number;
    readonly style?: Style;
    readonly dir?: "forward" | "back" | "both" | "none";
    readonly arrowsize?: number;
    readonly arrowhead?: ArrowType;
    readonly arrowtail?: ArrowType;
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
