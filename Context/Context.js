import { createContext } from "react";
import {useState} from "react";
const userContext=createContext();//syntax to create a new context 
// and we will import this file in profile 
// like basically here we have created a context and that will be imported in profile 
// and there we will use the conext using hook useContext
export const UserProvider= ({children}) => { //created provider
    const[user, setUser]= useState(null);//here user basically has everything name,email,contact,pic
    return(
        <userContext.Provider value={{user , setUser}}>
            {children}
        </userContext.Provider>
    );
    
}