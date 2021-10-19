import {
    getAuth, signInWithPopup, GoogleAuthProvider, signOut,
    onAuthStateChanged, GithubAuthProvider, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from '../Firebase/firebase.init';


initialization();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    console.log(isLoading);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    console.log(user);
    const handleGoogleBtn = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setError('')

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const handleGitHubBtn = () => {
        setIsLoading(true)
        signInWithPopup(auth, gitHubProvider)
            .then((result) => {
                setUser(result.user);
                setError('')

            }).catch((error) => {
                setError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    const handleSignupWithEmail = (email, password, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                handleEmailUserName(name);
                setError('')

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const handleEmailUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        })
        //.finally(() => setIsLoading(false))
    }

    const handleSignInWithEmail = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error)
        })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        error,
        isLoading,
        setError,
        handleGoogleBtn,
        handleGitHubBtn,
        handleSignupWithEmail,
        handleSignInWithEmail,
        logOut
    }
};

export default useFirebase;