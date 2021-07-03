import React,{useState} from 'react'
//import {histroy} from 'react-router-dom'
import {auth} from '../../../Firebase/firebase'

function SignIn() {
    const [userCredentials, setUserCredentials] = useState({email : '', password : ''})
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
    const SignInClick =()=>{
        if(('email' in userCredentials) && userCredentials.email.trim().length !== 0 && ('password' in userCredentials) && userCredentials.password.length !== 0){
            auth.signInWithEmailAndPassword(userCredentials.email,userCredentials.password)
            .then((usr)=>{
                console.log(auth.currentUser)
            }).catch((error)=>{
                alert(error.message)
            })
        }else{
            console.log('error')
        }
    }
    return (
        <div>
            SignIn
            <div>
                <input onChange={(e)=>updateCredentials(e)} type="email" placeholder="email"/>
                <input onChange={(e)=>updateCredentials(e)} type="password" placeholder="password"/>
                <button onClick={()=>SignInClick()}>Log In</button>
            </div>

        </div>
    )
}

export default SignIn
