import { createContext, useContext } from "react";

export const Usercontext = createContext()

export const Myprovider = Usercontext.Provider


const Mycustom=()=>{
   return useContext(Usercontext)
}

export default Mycustom