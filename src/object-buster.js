class ObjectBuster {
  _checkObject(obj) {
    if (
      typeof obj !== "object" ||
      obj === null ||
      Object.keys(obj).length === 0
    ) {
      throw new Error(`Expected a non-empty object`);
    }
  }

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
