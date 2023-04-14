import React from "react";
import {StoreType} from "./redux/redux-store";


const StoreContext = React.createContext({} as StoreType)

type ProviderType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider: React.FC<ProviderType> = (props) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

