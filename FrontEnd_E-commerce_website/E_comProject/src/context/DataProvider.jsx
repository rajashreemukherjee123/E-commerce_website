import { createContext, useEffect, useState } from "react";



export const DataContext = createContext(null);

const DataProvider = ({children})=>{
    const [account,setAccount] = useState("")
    
    // useEffect(()=>{
    //     const storedUser = localStorage.getItem("userName");
    //     if(storedUser){
    //         setAccount(storedUser);
    //     }
    // },[]);


    return(

        <DataContext.Provider value={{
            account,
            setAccount
        }}>
            {children}
        </DataContext.Provider>    
    )

}

export default DataProvider;