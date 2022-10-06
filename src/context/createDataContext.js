import React from "react";
import { useReducer } from "react";
import { createContext } from "react";




export default (reducerFunction, actionsObject, initialState) => {


    const Context = createContext();

    
    const Provider = ({children}) => {

        const [state, dispatch] = useReducer(reducerFunction, initialState);

        const boundedActions = {};
        
        for (let key in actionsObject) {
            boundedActions[key] = actionsObject[key];
        }



        const data = {
            currentState: state,
            actions: boundedActions,
            dispatch: dispatch
        }


        return (
            <Context.Provider value={data}>
                {children}
            </Context.Provider>
        );
    };

    return {Context, Provider};

};