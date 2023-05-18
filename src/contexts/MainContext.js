import { createContext  , useContext , useState } from 'react'

export const MainContext = createContext()

export const MainProvider = ({children}) => {
    const [info , setInfo] = useState({
        name:'',
        creditNum:'',
        timeBar:'',
        cvc:'',
        total:0,
    })
    const value = {
        info,
        setInfo
    }


    return(
        <MainContext.Provider value={value} >
            {children}
        </MainContext.Provider>
    )
}

export const useMainInfo = () => {
    const info = useContext(MainContext)
    return info
}