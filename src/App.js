import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './Firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        //user is logged in
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL,
        }))

      }else{
        //user is loggedout
        dispatch(logout());
      }
    })
  }, []);
  return (
    <div className="app">

      {/* Header */}
      <Header/>
     {!user ? (
      <Login/>
     ): (
      <div className='app__body'>
        {/* Sidebar */}
      <Sidebar/>
      {/* feeds */}
      <Feed/>
      {/* widgets */}
      </div>
     )}
    </div>
  );
}

export default App;
