export enum NodeType {
  ATTRIBUTE_NODE = 2,
  CDATA_SECTION_NODE = 4,
  COMMENT_NODE = 8,
  DOCUMENT_FRAGMENT_NODE = 11,
  DOCUMENT_NODE = 9,
  DOCUMENT_TYPE_NODE = 10,
  ELEMENT_NODE = 1,
  ENTITY_NODE = 6,
  ENTITY_REFERENCE_NODE = 5,
  NOTATION_NODE = 12,
  PROCESSING_INSTRUCTION_NODE = 7,
  TEXT_NODE = 3,
}

export interface Node {
  childNodes: Node[];
  nodeType: NodeType;
  nodeValue: string;
  getElementById: (id: string) => Node | null;
  firstChild: Node;
  nextSibling: Node;
  previousSibling: Node;
  lastChild: Node;
}
