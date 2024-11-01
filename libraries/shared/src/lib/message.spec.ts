import { describe, expect, test } from "@jest/globals";
import { message } from "./message.js";

describe("Message", () => {
  test("exists", () => {
    expect(message).toBeDefined();
  });
});
