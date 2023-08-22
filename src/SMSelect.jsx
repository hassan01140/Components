import React from "react";
import SMCard from "./Components/SMCard";


const SMSelect =(props)=>{



    return(
<>

    <div>
    <select>
        <option value="">{props.id}</option>
        <option value="">{props.institute}</option>
        <option value="">{props.age}</option>
        <option value="">{props.name}</option>
        <option value="">{props.isActive}</option>
    </select>

    </div>

</>     
)
}

export default SMSelect;