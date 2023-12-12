import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  const [principle,setPrinciple]=useState(0);
  const [interest,setinterest]=useState(0);
  const [year,setyear]=useState(0);
  const [ result,setResult]=useState(0);
  const [isprinciple,setIsprinciple]=useState(true)
  const [isinterest,setIsInterest]=useState(true)
  const [isyear,setIsyear]=useState(true)


  const calculateInterest=(e)=>{
    e.preventDefault();
    const result=(principle * interest * year )/ 100;
    setResult(result)
  }
  const handleReset=()=>{
    setPrinciple(0);
    setinterest(0);
    setyear(0);
    setResult(0);
  }

const validate=(e)=>{
  
  const {name,value}=e.target;
 setPrinciple(value);
  if(name==='principlevalue'){
    setPrinciple(value);
    let res=(!!value.match(/^[0-9]+$/));
    if (res==true){
      setIsprinciple(true)
    }
    else{
      setIsprinciple(false)
    }
  }
  else if(name==='interestField'){
  setinterest(value)
  let res=(!!value.match(/^[0-9]+$/));
    if (res==true){
      setIsInterest(true)
    }
    else{
      setIsInterest(false)
    }
   }

  else{
    setyear(value)
    let res=(!!value.match(/^[0-9]+$/));
    if (res==true){
      setIsyear(true)
    }
    else{
      setIsyear(false)
    }
  }
}
  
  
  return(
    <>
    <div className='d-flex justify-content-center align-items-center w-100 mt-5'style={{height:"90vh"}}>
     <div className='bg-light p-5 rounded' style={{width:"400px"}}>
     <h1>Simple Interest</h1>
     <p>calculate Simple Interest easily</p>
     <div style={{height:"150px"}} className=' flex-column bg-warning mt-3 rounded d-flex justify-content'>
     <h2>&#8377;{result}</h2>
     
     <p>Total Simple Interest</p>
     </div > 
     <form action=" " className='mt-3' onSubmit={calculateInterest}>
     
     <TextField  className='w-100' id="outlined-basic" label="principle amount" variant="outlined"
     value={principle}
     name="principlevalue"
     onChange={(e)=>validate(e)}/>
     {
     !isprinciple &&
     <div>
       <p className='text-danger'>invalid</p>
     </div>
     }

     <TextField  className='w-100' id="outlined-basic" label="rate of interest" variant="outlined"
     name='interestField'
     value={interest}
     onChange={(e)=>validate(e)}/>
      {
     !isinterest &&
     <div>
       <p className='text-danger'>invalid</p>
     </div>
     }
     <TextField  className='w-100' id="outlined-basic" label="Year(Yr)" variant="outlined" 
     name='totalyear'
     value={year}
     onChange={(e)=>validate(e)}/>
     {
     !isyear &&
     <div>
       <p className='text-danger'>invalid</p>
     </div>
     }
     

     <Stack direction="row" spacing={2} className='mt-5'>
     <Button disabled ={isprinciple&& isinterest && isyear?false :true} variant="contained" className='bg-success' style={{height:"50px",width:"200px"}}type='submit'>Calculate</Button>
     <Button variant="contained" className='bg-success' style={{height:"50px",width:"200px"}}onClick={handleReset}>Reset</Button>
    </Stack>
    </form>
    </div>
    </div>
    </>
  );
    }

export default App;
