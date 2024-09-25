
import {useState} from "react";
export default function Like(){
    const[clicked,setClicked]=useState(false);
    function handleClick(){
        if(clicked){
            updateCount(-1);
        }else{
            updateCounnnt(+1);
        }
        setClicked(!clicked);
    }
    return(
        <span  style={cursor:'pointer'}} onClick={handleClick}>{cicked? "❤️" :"🖤"} </span>
    );
}