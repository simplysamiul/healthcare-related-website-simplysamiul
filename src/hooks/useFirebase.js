import initializeAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuth();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const auth = getAuth();

    // Google authentication
    const googleLogIn = () =>{
        const goolgeProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, goolgeProvider)
    }

    // Observer
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
        });
    },[])

    // Logout
    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }


    return{
        user,
        googleLogIn,
        logOut
    }
}

export default useFirebase;