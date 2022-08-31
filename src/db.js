import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBv9VD1nQHGum4bimGlpKXZ22gkyIYph-Y",
    authDomain: "firechat-vue-3eb3f.firebaseapp.com",
    projectId: "firechat-vue-3eb3f",
    storageBucket: "firechat-vue-3eb3f.appspot.com",
    messagingSenderId: "131183487398",
    appId: "1:131183487398:web:21fe8ac1611c4c13620767"
}

const app = initializeApp(firebaseConfig); 
const db = getDatabase(app)
export default db;  

