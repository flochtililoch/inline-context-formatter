// @flow

import { formatter, Node } from "../src";
import { parse } from "./helpers";
import { describe, expect, test } from "@jest/globals";

describe("formatter", () => {
  test("1", () => {
    const node: Node = parse(
      `<text>
        <text>
          <text>   </text>
          <text>   </text>
          <text>
            Hello
          </text>
          <text>
            World
          </text>
        </text>
        <text>
          of Instawork!
        </text>
        <text> </text>
      </text>`
    );

    expect(formatter(node)).toEqual("Hello World of Instawork!");
  });
});
