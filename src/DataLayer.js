import React , {createContext,useContext,useReducer} from 'react';
export const state = createContext();

export const DataLayer=({ initial,reducer,children})=>(
<state.Provider value={useReducer(reducer,initial)}>
    {children}
</state.Provider>
);
export const useDataLayerValue=()=>useContext(state);
