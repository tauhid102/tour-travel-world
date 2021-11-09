import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import userAuthentication from "../Pages/Login/Firebase/firebase.init";


userAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [userEmail,setUserEmail]=useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleGoogleSignin = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);

    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
            setError('');
            setUserEmail('');
        }).finally(() => {
            setIsLoading(false);
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, [])
    return {
        user, error, isLoading,userEmail,setUserEmail,
        setUser, setError, setIsLoading,
        logOut,
        handleGoogleSignin
    }
}
export default useFirebase;