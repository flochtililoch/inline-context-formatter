import { Node, NodeType } from "../src";
import { DOMParser } from "xmldom-instawork";

const parser = new DOMParser();

const formatNode = (node: Node): Node => ({
  childNodes: Array.from(node.childNodes || []).map((n) => formatNode(n)),
  nodeType: node.nodeType,
  nodeValue: node.nodeValue,
});

export const parse = (template: string): Node => {
  const doc = parser.parseFromString(template);
  const node = formatNode(doc);
  // console.log(JSON.stringify(node, null, 2));
  return node;
};
