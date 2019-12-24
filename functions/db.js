const Firebase = require("./firebase");



class DBConnection {
  constructor() {
    this._firestore = Firebase.getFireStore();
  }

  static getInstance() {
    if (!this._instance) this._instance = new DBConnection();

    return this._instance; // convention for private fields to prefix _
  }

  /**
   * @desc returns the collection associated with a name
   * @param {String} collectionName
   */
  getCollection(collectionName) {
    return this._firestore.collection(collectionName);
  }

  getBatch() {
    return this._firestore.batch();
  }

  /**
   * @desc returns a document that exist in a certain collection
   * @param {String} collection
   * @param {String} document
   */
  getDocumentFromCollection(collection, document) {
    return this.getCollection(collection).doc(document);
  }
}

module.exports = DBConnection.getInstance();
