const buster = require("./object-buster");

describe("Javascript Object Buster", () => {
  test("should throw error for non-empty object check", () => {
    expect(() => buster._checkObject(null)).toThrow(
      "Expected a non-empty object"
    );
    expect(() => buster._checkObject({})).toThrow(
      "Expected a non-empty object"
    );
  });

  test("strict method should throw error for undefined, null, empty string, empty array, and empty object properties", () => {
    expect(() => buster.strict({ a: undefined })).toThrow(
      "Property 'a' cannot be undefined."
    );
    expect(() => buster.strict({ a: null })).toThrow(
      "Property 'a' cannot be null."
    );
    expect(() => buster.strict({ a: "" })).toThrow(
      "Property 'a' cannot be an empty string."
    );
    expect(() => buster.strict({ a: [] })).toThrow(
      "Property 'a' cannot be an empty array."
    );
    expect(() => buster.strict({ a: {} })).toThrow(
      "Property 'a' cannot be an empty object."
    );
  });

  test("must method should throw error for null or undefined properties", () => {
    expect(() => buster.must({ a: null })).toThrow(
      "Property 'a' cannot be null."
    );
    expect(() => buster.must({ a: undefined })).toThrow(
      "Property 'a' cannot be undefined."
    );
  });

  test("checkUndefined method should throw error for undefined properties", () => {
    expect(() => buster.checkUndefined({ a: undefined })).toThrow(
      "Property 'a' cannot be undefined."
    );
  });

  test("checkNull method should throw error for null properties", () => {
    expect(() => buster.checkNull({ a: null })).toThrow(
      "Property 'a' cannot be null."
    );
  });

  test("checkEmpty method should throw error for empty properties", () => {
    expect(() => buster.checkEmpty({ a: "" })).toThrow(
      "Property 'a' cannot be an empty string."
    );
    expect(() => buster.checkEmpty({ a: [] })).toThrow(
      "Property 'a' cannot be an empty array."
    );
    expect(() => buster.checkEmpty({ a: {} })).toThrow(
      "Property 'a' cannot be an empty object."
    );
  });
});
