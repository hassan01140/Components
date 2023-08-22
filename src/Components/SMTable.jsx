import React from "react";

const SMTable=(props)=>{
    return(
<>
<table>
  <tr>

    <td>id:#</td>
    <td>id:{props.id}</td>
  </tr>
  <tr>
    <td>Name:</td>
    <td>{props.name}</td>

  </tr>
  <tr>
    <td >Age:</td>
    <td >{props.age}</td>
  </tr>
  <tr>
    <td>Institute:</td>
    <td>{props.institute}</td>
  </tr>
  <tr>
    <td>IsActive:</td>
    <td>{props.isActive}</td>
  </tr> 
</table>
</>

    )
}

export default SMTable;