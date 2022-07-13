const INITIAL_VALUE={
    count : 0,
    arr : [],    
}

export default function FReducer(state=INITIAL_VALUE,action){
    switch(action.type){
        case "CHANGE_COUNT":
            return {
                ...state,
                count : action.payload,
            }
        default :
            return state;
    }
}

