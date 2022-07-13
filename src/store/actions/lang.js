export const changeLang = (payload) => {
    return {
        payload, // new data 
        type: "CHANGE_LANG" // nam of action
    }
}



// export const changeTheme = (payload) => {
//     return {
//         payload, 
//         type: "CHANGE_THEME"
//     }
// }