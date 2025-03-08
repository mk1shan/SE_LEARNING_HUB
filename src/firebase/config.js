import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJklCAiceN2R0KACrSXfSrlQH3gArBWmI",
  authDomain: "seweb-53f76.firebaseapp.com",
  projectId: "seweb-53f76",
  storageBucket: "seweb-53f76.firebasestorage.app",
  messagingSenderId: "83676767257",
  appId: "1:83676767257:web:de0907e71e443a92d17688",
  measurementId: "G-V3ZBBTP1B8"
};

let app;
let db;
let auth;
let analytics;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
  
  // Initialize collections
  const initializeCollections = async () => {
    try {
      // Check if collections exist by trying to get docs
      await getDocs(collection(db, 'resources'));
      await getDocs(collection(db, 'ratings'));
      console.log('Firebase collections initialized');
    } catch (error) {
      console.error('Error checking collections:', error);
    }
  };

  // Run initialization
  initializeCollections();

  // Initialize analytics in browser environment
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
} catch (error) {
  console.error("Firebase initialization error:", error);
}

export { app, db, auth, analytics };