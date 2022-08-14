import { TodoList } from "./TodoList";


export const todoReducer = ( initialState = [], action = {}) => {


    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];

        case '[TODO] Add Delete':
            return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO] Todo Toggle':
            return initialState.map( todo => {
                if( todo.id === action.payload ){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                    return todo;
                });
            
        default:
            return initialState;
    }
}
