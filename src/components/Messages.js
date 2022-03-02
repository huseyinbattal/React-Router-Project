import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Message from './Message'

export default function Messages() {
  return (
    <div>
      <h1>This is my Messages page!</h1>
      <ul>
        <li><Link to="message/bu1mesaj">Messages1</Link></li>
        <li><Link to="message/bu2mesaj">Messages2</Link></li>
        <li><Link to="message/bu3mesaj">Messages3</Link></li>
      </ul>
      <Routes>
        <Route path='message/:id' element={<Message />} ></Route>
        
      </Routes>
      </div>
  )
}
