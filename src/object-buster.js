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
}

module.exports = new ObjectBuster();
