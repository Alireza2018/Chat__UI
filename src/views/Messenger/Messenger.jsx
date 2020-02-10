import React from 'react'
import { useSelector } from 'react-redux'
import { normalize, schema } from 'normalizr';
//Import App Components
import { ChatProvider } from '../../components/Chat/react-chat'
import ChatLayout from '../../components/Chat/ChatLayout'

const groups = [
    {
      id: 1, 
      name: 'cool name', 
      lastMsg: 'I am very cool', 
      image: 'https://via.placeholder.com/150',
      messages: [] 
    },
    {
      id: 2, 
      name: 'another cool name', 
      lastMsg: 'I am super ool', 
      image: 'https://via.placeholder.com/150',
      messages: [] 
    }
]


const Messenger = () => {
    const owner = useSelector(state => state.chat.owner)
    
    return(
        <ChatProvider 
          groups={groups}
          owner={owner}
        >
          <ChatLayout/>
        </ChatProvider>
    )
}

export default Messenger