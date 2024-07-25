import { BgColor, Color, Shape } from "./options";

export interface GraphNodeOptions {
    readonly shape?: Shape;
    readonly color?: Color;
    readonly bgcolor?: BgColor;
}

export interface GraphNode {
    readonly label: string;
    readonly options?: GraphNodeOptions;
}

export function node(label: string, options?: GraphNodeOptions): GraphNode {
    return { label, options }
}
