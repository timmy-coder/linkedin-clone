import React, {useState} from 'react'
import { auth } from './Firebase'
import './Login.css'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

function Login() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [profilePic, setProfilePic] = useState("")
  const dispatch = useDispatch()


  
const register = async (e) => {
  if (name.length == 0) {
    alert("name cannot be empty");
  } else {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(user, {
      displayName: name,
      photoUrl: profilePic,
    }).then(() => {
      dispatch(login({
        email: user.email,
        uid: user.uid,
        displayName: name,
        photoUrl: profilePic
      }))
    })
  }
}
const loginToApp = (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      dispatch(login({
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        displayName: userCredential.user.displayName,
        profilePic: userCredential.user.photoURL
      }))
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
  });
 
}
  return (
    <div className='login'>
        <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
        <form>
          <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Full Name required if registering' />
          <input type="text" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile pic URL (optional)' />

          <input type="email" placeholder='Email'  value={email} onChange={(e)=>setEmail(e.target.value) }/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='Password'/>

          <button type='submit' onClick={loginToApp}>Sign in</button>
        </form>
        <p>Not a member? {" "} <span className='login__register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login
