const INITIAL_VALUE={
    list:[],   
}

export default function movieReducerTh(state=INITIAL_VALUE,action){
    switch(action.type){
        case "GET_Movie_LIST":
            return {
                ...state,
                list: action.payload,
            }
        default :
            return state;
    }
}

