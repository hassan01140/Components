import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Data from './Components/data'
import SMButton from './Components/SMButton';
import SMInput from './input';
import SMTable from './Components/SMTable';

const App=()=> {


return (
<>
{/* <h1 className='text-center'>Components</h1>
<div className=''>
<SMButton buttonClick={clickButton} buttonValue="Button 1"/>
<SMButton buttonValue="Button 3"/>
</div> */}

<div  >
<h1 className='text-center'> Components</h1>
<div >
<Data/>
</div> 
<div className='mt-5'>
<SMButton buttonClick={()=>{console.log("update")}} buttonValue="click me"/>
</div>
<div className='mt-5'>
  <SMInput innertext="Enter Your Name " getValue={(e)=>{console.log(e.target.value)}} />
</div>
<div>
  <SMTable/>
</div>

  </div>

    
</>    
  );
}

export default App;
