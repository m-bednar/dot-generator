import { generateArgumentOptions } from "./options";
import { BgColor, Color, Shape } from "./options";
import { makeIndent } from "./utils";

export interface GraphNodeOptions {
    readonly label?: string;
    readonly shape?: Shape;
    readonly color?: Color;
    readonly fontcolor?: Color;
    readonly fillcolor?: BgColor;
}

export interface GraphNode {
    readonly id: string;
    readonly options: GraphNodeOptions;
}

let nodes = 0;
export function node(label: string, options?: GraphNodeOptions): GraphNode {
    return { id: `node${nodes++}`, options: {label, ...options} }
}

export function generateNode(node: GraphNode, indent: number): string {
    const options = generateArgumentOptions(node.options);
    return `${makeIndent(indent)}${node.id} ${options}`;
}
