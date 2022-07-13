import {useDispatch, useSelector } from "react-redux";
import { changeLang } from "../store/actions/lang";

export default function ChangeLanguage(){
    // useSelector --> store --> reducer --> state 
    const lang = useSelector((state)=> state.langCompine.lang); // get data 
    // useDispatch --> 
    const dispatch = useDispatch()
 
     const handleLang = () => {
        dispatch(changeLang(lang === "ar" ? "en" : "ar"))
     }

    return (
        <>
            <h1 className="text-danger">  Current Lang: {lang}  </h1>
            <button className="btn btn-warning"
            onClick={()=> handleLang()}
            >  change language  </button> 
        
        </>
    )




}