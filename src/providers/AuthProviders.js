import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const storedToken = localStorage.getItem('token');
    const storedId = localStorage.getItem('id');
    const [token, setTokenState] = useState(storedToken);
    const [id, setIdState] = useState(storedId);

    const setToken = (newToken) => {
        setTokenState(newToken);
        if(newToken){
            localStorage.setItem('token', newToken)
        }else{
            localStorage.removeItem('token')
        }
    }

    const setId = (newId) => {
        setIdState(newId);
        if (newId) {
            localStorage.setItem('id', newId);
        } else {
            localStorage.removeItem('id');
        }
    }

    const logout = () => {
        setToken(null);
        setId(null);
        localStorage.removeItem('token');
        localStorage.removeItem('id');
    }

    return (
        <AuthContext.Provider value={{ token, id, setToken, setId, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;