import React, { useState } from 'react'

const App = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[emailerror, setEmailerror] = useState("");
    const[passworderror, setPassworderror] = useState("");

    const users = [
    {
        id: 1,
        name: "ABC",
        email: "abc@gmail.com",
        password: "12"
    },
    {
        id: 2,
        name: "DEF",
        email: "def@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "GHI",
        email: "ghi@gmail.com",
        password: "123456"
    }
];

function handleSubmit(e){
    e.preventDefault();
    let emailFlag = false, passwordFlag = false;
    let userdata = null;
    for(let user of users){
        if(user.email===email && user.password!==password){
            emailFlag = true;
            passwordFlag = false;
            break;
        }
        if(user.password===password && user.email!==email){
            passwordFlag = true;
            emailFlag = false;
            break;
        }
        if(user.email===email && user.password==password){
            emailFlag = true;
            passwordFlag = true;
            userdata = user;
            break;
        }
        
    }

    if(emailFlag && passwordFlag){
        setTimeout(()=>{
            console.log(userdata);
        },3000);
    }
    else if(emailFlag==false && passwordFlag==true){
        setTimeout(()=>{
            console.log("User not found");
        },3000);
        setEmailerror("User not found");
    }
    else if(emailFlag==true && passwordFlag==false){
        setTimeout(()=>{
            console.log("Password Incorrect");
        },3000);
        setPassworderror("Password Incorrect");
    }
}
  return (
    <div>
        <form onSubmit={e=>handleSubmit(e)}>
            <input type="email" id="input-email" value={email} onChange={e=>setEmail(e.target.value)}/>
               <p id="user-error">{emailerror}</p>
            <input type="password" id="input-password" value={password} onChange={e=>setPassword(e.target.value)}/>
               <p id="password-error">{passworderror}</p>
            <button id="submit-form-btn">Login</button>
        </form>
    </div>
  )
}

export default App