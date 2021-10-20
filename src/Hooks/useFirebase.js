import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const singInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((e) => setError(e.message));
  };
  const logOut = () => {
    signOut(auth).then(() => setUser({}));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
    return unsubscribe;
  });
  const handleSingUp = (e) => {
    e.preventDefault();
    registerUser(email, password);
  };
  const handleSingIn = (e) => {
    e.preventDefault();
    proccessLogin(email, password);
  };
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((e) => setError(e.message));
  };
  const proccessLogin = (email) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((e) => setError(e.message));
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return {
    handleSingIn,
    handleEmail,
    handlePassword,
    handleSingUp,
    singInUsingGoogle,
    logOut,
    user,
    error,
  };
};
export default useFirebase;
