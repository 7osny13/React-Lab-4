const INITIAL_VALUE = {
    lang: "en",
    counter: 100
}

export default function LangReducer(state=INITIAL_VALUE, action){

    switch(action.type){
        case "CHANGE_LANG":
            return {
                ...state,
                lang: action.payload
            };
        default: 
            return state;
    }

}


// switch (): 
//     case "1"
//         test
//     case "2"
//         test 2
//     default: 
