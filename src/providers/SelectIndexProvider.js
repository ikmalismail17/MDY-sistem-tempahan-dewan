import {createContext, useState, useContext} from 'react';

const IndexProvider = createContext();

const SelectIndexProvider = ({children}) =>{
    const [selectedIndex, setSelectedIndex] = useState(0);

    const setIndexByRoute = (route) => {
        let index = 0;

        switch(route){
            case '/halaman':
                index = 1;
                break;
            case '/halaman/kalendartempahan':
                index = 2;
                break;
            case '/halaman/senaraitempahan':
                index = 3;
                break;
            case '/halaman/dewan':
                index = 4;
                break;
            default:
                index = 0;
                break;
        }

        setSelectedIndex(index);
    }

    return (
        <IndexProvider.Provider value={{setSelectedIndex, setIndexByRoute, selectedIndex}}>
            {children}
        </IndexProvider.Provider>
    )
    
}

export const useSelectedIndex = () => useContext(IndexProvider);

export default SelectIndexProvider;