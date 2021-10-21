import initializeAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuth();
const useFirebase = () =>{
    const [user, setUser] = useState({});

    const auth = getAuth();
    // const [email,SetEmail] = useState("");
    // const [password, setPassword] = useState("");

    // By Google authentication
    const googleLogIn = () =>{
        const goolgeProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, goolgeProvider)
    }

    // // Create account
    // const createAccount = (email, password) =>{
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(useCredential => {
    //        console.log(useCredential.user);
    //     })
    //     SetEmail(email);
    //     setPassword(password);
    // }

    // // const signInAccount = () =>{
    // //     signInWithEmailAndPassword(auth, email, password)

    // // }
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
        // createAccount,
        // signInAccount
    }
}

export default useFirebase;