import { makeIndent } from "./utils";

export type Shape = string;
export type Color = string;
export type BgColor = string;
export type Style = string;

function stringifyValue(value: any): string {
    if (typeof value === 'string') {
        return `"${value}"`;
    }
    return String(value);
}

export function generateStandaloneOptions(options: object, indent: number) {
    const entries = Object.entries(options).map(([name, value]) => `${makeIndent(indent)}${name}="${value}"`);
    return `${entries.join(';\n')};\n`;
}

export function generateArgumentOptions(options: object) {
    const entries = Object.entries(options).map(([name, value]) => `${name}=${stringifyValue(value)}`);
    return `[${entries.join(', ')}]`;
}

