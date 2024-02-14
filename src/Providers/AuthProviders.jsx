import { createContext, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const userInfo = {
        user, 
        setUser,
        loading,
        setLoading
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;