import axios  from "axios";

export const MovieTh =() => (dispatch) =>{
    return axios.get("https://api.themoviedb.org/3/movie/popular?", {
            params: {
                api_key: "aa6fc65fcedb7431af3ac2fbe6484cd0",
            },
        })
        .then((res)=> dispatch ({
            type : "GET_Movie_LIST",
            payload : res.data.results
        })).catch((err) => console.log(err))
}