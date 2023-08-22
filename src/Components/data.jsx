import React from "react";
import SMSelect from "../SMSelect";
import SMCard from "./SMCard";
import SMTable from "./SMTable";
const Data =()=>{
    let users=[{
        id:1,
        name:"ABC",
        age:15,
        institute:"SAIMS",
        isActive:"Approved"
    },
    {
        id:2,
        name:"IJK",
        age:20,
        institute:"Aptech",
        isActive:"Approved"
    },
    {
        id:3,
        name:"MNO",
        age:30,
        institute:"Adamjee",
        isActive:"Approved"
    },
    {
        id:4,
        name:"XYZ",
        age:40,
        institute:"MAK",
        isActive:"Approved"
    }];    
    return(
        <>
 
<div className="d-flex justify-content-around">
{users.map((e,i)=>{
     return(
         <SMCard id={e.id} institute={e.institute} age={e.age} name={e.name} isActive={e.isActive}/>
         )
        })} 
 </div>
 <div className="d-flex justify-content-around mt-5  ">
{users.map((e,i)=>{
     return(
         <SMSelect id={e.id} institute={e.institute} age={e.age} name={e.name} isActive={e.isActive}/>
         )
        })} 
 </div>

 
 <div className="d-flex table mt-3  ">
{users.map((e,i)=>{
     return(
         <SMTable id={e.id} institute={e.institute} age={e.age} name={e.name} isActive={e.isActive}/>
         )
        })} 
 </div>
       
        </>
    )
}

export default Data;