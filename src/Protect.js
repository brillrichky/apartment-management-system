import {Navigate} from "react-router-dom";

 export function Protect(props){
    const token = localStorage.getItem('token');
    console.log(token);
   
    if(!token){
        return <Navigate to="/login"/> 
    }
    else{
        const{children}=props;
        return(
            <>
            {children}
            </>
        )
    }
 }