var admin = require("firebase-admin");

var serviceAccount = require("./config/opera-reservation-system-firebase-adminsdk-snuif-725e06eaa8.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://opera-reservation-system.firebaseio.com"
});


class Firebase {
    constructor() { }
  
    static getInstance() {
      if (!this._instance) this._instance = new Firebase();
  
      return this._instance; // convention for private fields to prefix _
    }
  
    getFireStore(app = undefined) {
      return admin.firestore(app);
    }
  
    getAuth(app = undefined) {
      return admin.auth(app);
    }
  }
  
  module.exports = Firebase.getInstance();
  