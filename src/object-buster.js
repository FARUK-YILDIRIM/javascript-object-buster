class ObjectBuster {
  /**
   * Checks if the provided object is a non-empty object.
   * @param {Object} obj - The object to check.
   * @throws {Error} If the object is not a non-empty object.
   */
  _checkObject(obj) {
    if (
      typeof obj !== "object" ||
      obj === null ||
      Object.keys(obj).length === 0
    ) {
      throw new Error("Expected a non-empty object");
    }
  }

  /**
   * Strictly checks the properties of the object.
   * Checks for undefined, empty, and null properties.
   * @param {Object} obj - The object to validate.
   * @throws {Error} If any property is undefined, null, empty string, empty array, or empty object.
   */
  strict(obj) {
    this._checkObject(obj);
    const keys = Object.keys(obj);
    for (const key of keys) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];

        if (value === undefined) {
          throw new Error(`Property '${key}' cannot be undefined.`);
        }

        if (value === null) {
          throw new Error(`Property '${key}' cannot be null.`);
        }

        if (value === "") {
          throw new Error(`Property '${key}' cannot be an empty string.`);
        }

        if (Array.isArray(value) && value.length === 0) {
          throw new Error(`Property '${key}' cannot be an empty array.`);
        }

        if (typeof value === "object" && Object.keys(value).length === 0) {
          throw new Error(`Property '${key}' cannot be an empty object.`);
        }

        if (typeof value === "object" && value !== null) {
          this.strict(value);
        }
      }
    }
  }

  /**
   * Checks the object for undefined or null properties.
   * @param {Object} obj - The object to validate.
   * @throws {Error} If any property is undefined.
   */
  must(obj) {
    this._checkObject(obj);
    const keys = Object.keys(obj);
    for (const key of keys) {
      const value = obj[key];

      if (value === undefined) {
        throw new Error(`Property '${key}' cannot be undefined.`);
      }

      if (value === null) {
        throw new Error(`Property '${key}' cannot be null.`);
      }

      if (typeof value === "object" && value !== null) {
        this.must(value);
      }
    }
  }

  /**
   * Checks the object for undefined properties recursively.
   * @param {Object} obj - The object to validate.
   * @throws {Error} If any property is undefined.
   */
  checkUndefined(obj) {
    this._checkObject(obj);
    const keys = Object.keys(obj);
    for (const key of keys) {
      const value = obj[key];

      if (value === undefined) {
        throw new Error(`Property '${key}' cannot be undefined.`);
      }

      if (value && typeof value === "object") {
        this.checkUndefined(value);
      }
    }
  }

  /**
   * Checks the object for null properties recursively.
   * @param {Object} obj - The object to validate.
   * @throws {Error} If any property is null.
   */
  checkNull(obj) {
    this._checkObject(obj);
    const keys = Object.keys(obj);
    for (const key of keys) {
      const value = obj[key];

      if (value === null) {
        throw new Error(`Property '${key}' cannot be null.`);
      }

      if (typeof value === "object" && value !== null) {
        this.checkNull(value);
      }
    }
  }

  /**
   * Checks the object for empty properties recursively.
   * @param {Object} obj - The object to validate.
   * @throws {Error} If any property is an empty string, empty array, or empty object.
   */
  checkEmpty(obj) {
    this._checkObject(obj);
    const keys = Object.keys(obj);
    for (const key of keys) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];

        if (value === "") {
          throw new Error(`Property '${key}' cannot be an empty string.`);
        }

        if (Array.isArray(value) && value.length === 0) {
          throw new Error(`Property '${key}' cannot be an empty array.`);
        }

        if (typeof value === "object" && Object.keys(value).length === 0) {
          throw new Error(`Property '${key}' cannot be an empty object.`);
        }

        if (typeof value === "object" && value !== null) {
          this.checkEmpty(value);
        }
      }
    }
  }
}

module.exports = new ObjectBuster();
