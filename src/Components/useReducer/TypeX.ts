
export type State = {count : number}
export type Action = { type : "increment"} | {type : "decrement"}

export const ReducerFunction = (state : State , action : Action ) : State =>{
    switch (action.type) {
        case "increment" : return {count: state.count +1 }
        case "decrement" : return {count: state.count -1 }
        default: return state;
    }
}