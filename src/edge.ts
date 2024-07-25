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
