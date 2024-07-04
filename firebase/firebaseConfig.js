// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB3an13oOJfBt2bjANKplAd01k-lKLywt0",
  authDomain: "https://identitytoolkit.googleapis.com",
  databaseURL: "https://tiendavirtual-app-658e0-default-rtdb.firebaseio.com",
  projectId: "1054436323720",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
