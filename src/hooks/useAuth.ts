// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/utils/firebaseClient';
import { setUserUID } from "@/components/context/AuthContext";

interface AuthState {
  user: User | null;
  loading: boolean;
  error: Error | null;
  encryptionReady: boolean;
}

export function useAuth(): AuthState {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
    encryptionReady: false
  });

  useEffect(() => {
    // Set up the authentication state listener
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          // If the user is authenticated, set their UID for encryption
          setUserUID(user.uid);
        }
        setAuthState({
          user,
          loading: false,
          error: null,
          encryptionReady: !!user,
        });
      },
      (error) => {
        console.error('Auth state change error:', error);
        setAuthState({
          user: null,
          loading: false,
          error,
          encryptionReady: false
 
        });
      }
    );

    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
  }, []);

  return authState;
}