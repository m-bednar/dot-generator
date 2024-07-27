import { makeIndent } from "./utils";

export type Shape = string;
export type Color = string;
export type BgColor = string;
export type Style = string;

function stringifyValue(value: unknown): string {
    if (typeof value === 'string') {
        return `"${value}"`;
    }
    return String(value);
}

export function generateStandaloneOptions(options: object, indent: number) {
    const entries = Object.entries(options);
    if (entries.length === 0) {
        return '';
    }
    const mapped = entries.map(([name, value]) => `${makeIndent(indent)}${name}=${stringifyValue(value)}`);
    return `${mapped.join(';\n')};\n`;
}

export function generateArgumentOptions(options: object) {
    const entries = Object.entries(options);
    if (entries.length === 0) {
        return '';
    }
    const mapped = entries.map(([name, value]) => `${name}=${stringifyValue(value)}`);
    return `[${mapped.join(', ')}]`;
}

