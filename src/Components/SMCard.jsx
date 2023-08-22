import React from "react";
const SMCard =(props)=>{
    // const {id,name,age,isActive,institute}=props;
    
    return(

        <>
    <div className="">
    <div class="card" style={{width: "18rem;"}}>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">id:{props.id}</li>
    <li class="list-group-item">Age:{props.age}</li>
    <li class="list-group-item">Institue:{props.institute}</li>
    <li class="list-group-item">Name:{props.name}</li>
    <li class="list-group-item">isActive:{props.isActive}</li>
    </ul>
    </div>
    </div>


    </>
        )
}
export default SMCard;