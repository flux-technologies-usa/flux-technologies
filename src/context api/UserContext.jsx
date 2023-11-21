import React from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  // all state
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  //   privider
  const googleProvider = new GoogleAuthProvider();

  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    googleLogIn,
    signIn,
    signUp,
    logOut,
    updateUser,
    user,
    loading,
    forgotPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default UserContext;
