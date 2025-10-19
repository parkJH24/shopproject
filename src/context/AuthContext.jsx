import { createContext, useContext, useEffect, useState } from "react";
import { googleLogin, googleLogout, onUserState } from "../api/firebase";

const AuthContext = createContext()
export function AuthContextProvider({children}){
    const [user, setUser] = useState();
    const [init, setInit] = useState(true)

    useEffect(()=>{
       const unSubScribe = onUserState(async(newUser)=>{
        setUser(newUser)
        setInit(false)
       })
       return ()=> unSubScribe && unSubScribe()
    },[])

    return(
        <AuthContext.Provider value={{user, googleLogin, googleLogout, uid:user?.uid, init}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext(){
    return useContext(AuthContext)
}