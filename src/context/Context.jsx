import { createContext, useState } from "react";


export const AppContext = createContext();

export function ContextProvider({children}) {

    const loadersConfig = {
        color: '#4ade80',
        altColor: '#ffffff',
        margin: '0',
        display: 'block'
    }
    const [user, setUser] = useState({id:null, username:null, email:null});
    const [searchQuery, setSearchQuery] = useState('');
    
    return (
        <AppContext.Provider value={{user, setSearchQuery, searchQuery, setUser, loadersConfig}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;
