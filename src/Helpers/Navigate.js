import {useNavigate} from "react-router-dom";


export const returnNavigate = ()=>{
    const navegate = useNavigate();
    return (route)=>{
        navegate(route)
    }
}