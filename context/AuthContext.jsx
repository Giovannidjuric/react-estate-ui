import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({children}) => {
    
    const [authContext, setAuthContext] = useState(JSON.parse(localStorage.getItem("user")));

    const updateUser = (data) => {
        setAuthContext(data);
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(authContext));
    }, [authContext])





    return (
        <AuthContext.Provider value={{authContext, updateUser}}>
            {children}
        </AuthContext.Provider>
    )

}
