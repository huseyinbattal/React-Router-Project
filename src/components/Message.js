import React from 'react'
import {useParams} from "react-router-dom"

export default function Message() {
    let message = useParams()
  return (
    <div>This is My Message {message.id} </div>
  )
}
