import { useState } from "react";

important{useState}from "react";
function UnderstandState(){
    Let[Count,setCount]=useState(0);
    Let[name,setName]=useState("doremon");
    let[flag,setFlag]=useState(false);
    function handleClick(){
        setCount(count+1);
        setName(name+"is very popular.");
        setFlag(!flag);
    }
    return(
        <div>
            <div>
                count:{count}
                <br/>
                name:{name}
                <br/>
                flag:{flag+" "}
            </div>
        </div>
    );
}