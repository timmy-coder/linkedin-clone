import React from 'react'
import './feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import InputOption from './InputOption'
import Post from './Post'
import { useState } from 'react'
import { useEffect } from 'react'
import { db } from './Firebase'
// import firebase from 'firebase';
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {addDoc, Timestamp} from 'firebase/firestore'
import { useSelector } from 'react-redux'
import FlipMove from 'react-flip-move'
import { selectUser } from './features/userSlice'


function Feed() {
const user = useSelector(selectUser)
const [input, setInput] = useState('');
const [posts, setPosts] = useState([]);

useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy("timestamp", "desc"))
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])
  

const sendPost = e => {
    e.preventDefault();
    addDoc(collection(db, 'posts'), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || '',
        timestamp: Timestamp.now()
      })
      setInput("");

}
  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
            <CreateIcon/>
            <form action="">
                <input type="text"  value={input} onChange={e => setInput(e.target.value)}/>
                <button onClick={sendPost} type='submit'>Send</button>
            </form>
        </div>
        <div className="feed__inputOptions">
            <InputOption title='Photo' Icon={ImageIcon} color='#7085F9'/>
            <InputOption title='Video' Icon={SubscriptionsIcon} color='#E7A33E'/>
            <InputOption title='Event' Icon={EventNoteIcon} color='#C0CBCD'/>
            <InputOption title='Write article' Icon={CalendarViewDayIcon} color='#70C15E'/>
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
        {posts.map(({id, data: {name, description, message, photoUrl}}) => (
          <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed
