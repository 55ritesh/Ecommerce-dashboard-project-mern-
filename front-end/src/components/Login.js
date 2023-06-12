import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';




const Login = () => {


    const [password, setPassword] = useState('');
    const  [email, setEmail] = useState('');
    const navigate = useNavigate();

    // ========================code to redirect user to "/" after login successfuly==========if the user is already logged in he wont be able to access login page==============//

    useEffect (()=>{
    const auth = localStorage.getItem("user");
    if(auth)
    {
        navigate("/");
    }
    },[])

    // ============login api integration===========================================//

    const handleLogin= async ()=>{
        // console.log("email,password", email, password);  
        let result =  await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({email, password}),
            headers:{
                'Content-Type' : 'application/json'
              },
        });
        result = await result.json();
        // console.log(result)
        if(result.name)
        {
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/")
        }
        else{
            alert("please enter correct details")
        }
    }

  return (
    <div className='login'>
    
    <h1>Login</h1>

    <input type="text" className='inputBox' placeholder='Enter Email'
    onChange={(e)=>setEmail(e.target.value)} value={email}/>

    <input type="password" className='inputBox' placeholder='Enter Password'
    onChange={(e)=>setPassword(e.target.value)} value={password} />

    <button onClick={handleLogin}  className='appbutton'>Login</button>

    </div>
  )
}

export default Login