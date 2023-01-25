// @flow

import { formatter, Node } from "../src";
import { parse } from "./helpers";
import { describe, expect, test } from "@jest/globals";

describe("Inline context formatter", () => {
  test("1", () => {
    const node: Node = parse(`<h1>      Hello      World!     </h1>`);

    expect(formatter(node)).toEqual("Hello World!");
  });

  test("2", () => {
    const node: Node = parse(
      `<h1>   Hello
      <span> World!</span>   </h1>`
    );

    expect(formatter(node)).toEqual("Hello World!");
  });

  test("3", () => {
    const node: Node = parse(
      `<h1>   Hello
      <span> World<span>!</span></span>   </h1>`
    );
    expect(formatter(node)).toEqual("Hello World!");
  });

  test("4", () => {
    const node: Node = parse(
      `<h1>
         Hello
         <span>
           World<em>!</em>
         </span>
       </h1>`
    );
    expect(formatter(node)).toEqual("Hello World!");
  });
});
