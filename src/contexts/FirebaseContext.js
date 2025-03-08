import { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';

const FirebaseContext = createContext();

export function FirebaseProvider({ children }) {
  const [ratings, setRatings] = useState([]);
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Listen for ratings updates
      const ratingsQuery = query(collection(db, 'ratings'), orderBy('timestamp', 'desc'));
      const unsubscribeRatings = onSnapshot(ratingsQuery, (snapshot) => {
        const ratingsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setRatings(ratingsData);
        setLoading(false);
        setError(null);
      }, (error) => {
        console.error("Error fetching ratings:", error);
        setError(error.message);
        setLoading(false);
      });

      // Listen for resource recommendations
      const resourcesQuery = query(collection(db, 'resources'), orderBy('timestamp', 'desc'));
      const unsubscribeResources = onSnapshot(resourcesQuery, (snapshot) => {
        const resourcesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setResources(resourcesData);
      }, (error) => {
        console.error("Error fetching resources:", error);
      });

      return () => {
        unsubscribeRatings();
        unsubscribeResources();
      };
    } catch (error) {
      console.error("Error setting up listeners:", error);
      setError(error.message);
      setLoading(false);
    }
  }, []);

  const addRating = async (ratingData) => {
    try {
      const ratingToAdd = {
        comment: ratingData.comment.trim(),
        rating: Number(ratingData.rating),
        username: ratingData.userName.trim() || 'Anonymous',
        timestamp: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, 'ratings'), ratingToAdd);
      console.log("Rating added successfully with ID:", docRef.id);
      return true;
    } catch (error) {
      console.error("Error adding rating:", error);
      setError(error.message);
      return false;
    }
  };

  const addResource = async (resourceData) => {
    try {
      const resourceToAdd = {
        name: resourceData.name,
        link: resourceData.link,
        email: resourceData.email,
        status: 'pending',
        timestamp: serverTimestamp(),
        createdAt: new Date().toISOString() // Adding a string date for easier querying
      };

      // Save to Firebase
      const docRef = await addDoc(collection(db, 'resources'), resourceToAdd);
      console.log("Resource added successfully with ID:", docRef.id);
      
      // Send thank you email
      try {
        const response = await fetch('http://localhost:5000/api/send-thank-you', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: resourceData.email,
            name: resourceData.name,
            resourceName: resourceData.name
          })
        });
        
        if (!response.ok) {
          console.error('Failed to send thank you email');
        }
      } catch (emailError) {
        console.error('Error sending thank you email:', emailError);
        // Don't throw here - we still saved the resource successfully
      }

      return true;
    } catch (error) {
      console.error("Error adding resource:", error);
      setError(error.message);
      return false;
    }
  };

  return (
    <FirebaseContext.Provider value={{
      ratings,
      resources,
      loading,
      error,
      addRating,
      addResource
    }}>
      {children}
    </FirebaseContext.Provider>
  );
}

export function useFirebase() {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
}