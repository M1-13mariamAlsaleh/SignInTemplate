import React,{useState} from 'react'
//import {histroy} from 'react-router-dom'
import {auth} from '../../../Firebase/firebase'

function SignUp() {
    const [userCredentials, setUserCredentials] = useState({email : '', password : ''})
    //const useHistory = 
    const updateCredentials = (e)=>{
        if(e != null && ('target' in e)){
            if('type' in e.target && e.target.type === 'email'){
                if( 'value' in e.target ){
                    setUserCredentials(prev=>({
                        ...prev,
                        email : e.target.value,
                    }))
                }
            }
            if('type' in e.target && e.target.type === 'password'){
                if( 'value' in e.target ){
                    setUserCredentials(prev=>({
                        ...prev,
                        password : e.target.value
                    }))
                }
            }
        }
    }
    const SignUpClick =()=>{
        if(('email' in userCredentials) && userCredentials.email.trim().length !== 0 && ('password' in userCredentials) && userCredentials.password.length !== 0){
            auth.createUserWithEmailAndPassword(userCredentials.email,userCredentials.password)
            .then((usr)=>{
                console.log(usr)
            }).catch((error)=>{
                alert(error.message)
            })
        }else{
            console.log('error')
        }
    }
    return (
        <div>
            SignUp
            <div>
                <input onChange={(e)=>updateCredentials(e)} type="email" placeholder="email"/>
                <input onChange={(e)=>updateCredentials(e)} type="password" placeholder="password"/>
                <button onClick={()=>SignUpClick()}>Sign Up</button>
            </div>

        </div>
    )
}

export default SignUp
