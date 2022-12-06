import { DOMParser } from "xmldom-instawork";

const parser = new DOMParser();

export const parse = (template: string) => parser.parseFromString(template);
