import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, setUser] = useState({});
  const singInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((e) => setUser(e.message));
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

  return {
    singInUsingGoogle,
    logOut,
    user,
  };
};
export default useFirebase;
