import React from "react";

const SMInput =(props)=>{



    return(
<>

    <div>
<input type="text" placeholder={props.innertext} onChange={props.getValue}  />
    </div>

</>     
)
}

export default SMInput;