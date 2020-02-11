import React from 'react'
import { useSelector } from 'react-redux'
import { normalize, schema } from 'normalizr';
//Import App Components
import { ChatProvider } from '../../components/Chat/react-chat'
import ChatLayout from '../../components/Chat/ChatLayout'

const chats = [
    {
      id: 1, 
      name: 'cool name', 
      lastMsg: 'I am very cool', 
      image: 'https://via.placeholder.com/150',
      conversationsId: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' 
    },
    {
      id: 2, 
      name: 'another cool name', 
      lastMsg: 'I am super ool', 
      image: 'https://via.placeholder.com/150',
      conversationsId: '75442486-0878-440c-9db1-a7006c25a39f'
    }
]


const Messenger = () => {
    const owner = useSelector(state => state.chat.owner)
    
    return(
        <ChatProvider 
          chats={chats}
          owner={owner}
        >
          <ChatLayout/>
        </ChatProvider>
    )
}

export default Messenger