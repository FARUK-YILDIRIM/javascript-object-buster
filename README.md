# javascript-object-buster

## Overview
`javascript-object-buster` is a helper library designed to validate mandatory javascript objects.

## Features
- **Non-empty Object Check**: Ensures that the provided object is not null or empty.
- **Strict Validation**: Validates object properties to ensure they are not undefined, null, empty strings, empty arrays, or empty objects.
- **Must Validation**: Checks that specified properties are not null or undefined.
- **Undefined and Null Checks**: Provides methods to specifically check for undefined and null properties.
- **Empty Property Checks**: Validates that properties are not empty strings, empty arrays, or empty objects.

## Example
```js
const buster = require("./src/object-buster");

const obj = {
  name: "Barney Stinson",
  age: 36,
  address: {
    city: "New York",
    zip: "10001",
  },
  hobbies: ["womanizing", "suiting up", "playing laser tag"],
  education: {
    degree: "",
    major: "Business",
    year: 2003,
  },
  work: {
    company: "Goliath National Bank",
    position: "Corporate Executive",
    projects: ["Project C", "Project D"],
  },
  preferences: {
    notifications: {
      ios: true,
      android: undefined,
    },
    theme: "suits",
  },
};

try {
  // Validate the object strictly (undefined, null, empty)
  buster.strict(obj);
} catch (error) {
  console.error("Strict validation error:", error.message);
}

try {
  // Validate the object for undefined or null properties
  buster.must(obj);
} catch (error) {
  console.error("Must validation error:", error.message);
}

try {
  // Check for undefined properties recursively
  buster.checkUndefined(obj);
} catch (error) {
  console.error("Check undefined error:", error.message);
}

try {
  // Check for null properties recursively
  buster.checkNull(obj);
} catch (error) {
  console.error("Check null error:", error.message);
}

try {
  // Check for empty properties recursively
  buster.checkEmpty(obj);
} catch (error) {
  console.error("Check empty error:", error.message);
}

/**
 * Strict validation error: Property 'degree' cannot be an empty string.
 * Must validation error: Property 'android' cannot be undefined.
 * Check undefined error: Property 'android' cannot be undefined.
 * Check empty error: Property 'degree' cannot be an empty string.
 */
```



