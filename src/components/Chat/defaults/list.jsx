import React, { useState } from 'react'
import styled from 'styled-components'
import { useChat } from '../react-chat'
import {ChatItem, ChatAvatar, ChatDetails, InputBox} from './shared'
import TextInput from '../../TextInput'

const ChatList = styled.div`
    width: 300px;
    height: 100vh;
    padding: 16px 0px 16px 24px;
    border-left: 1px solid ${({ theme }) => theme.border.color};
`
const Owner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0em 3em 1.5em 1em;
    color: ${({ theme }) => theme.colors.primary};
    user-select: none;
    height: 15vh;
    margin-bottom: 1em;
    & img {
        width: 4em;
        height: 4em;
    }
    & div:first-child {
        display: flex;
    }
`

const List = () => {
    const { owner, chats, chat, onSelectChat } = useChat()
    const [index, setIndex] = useState(chat.id)
    const handleClickItem = chat => {
        setIndex(chat.id)
        onSelectChat(chat)
    }

    return(
        <ChatList>
            <Owner>
                <div>
                    <ChatAvatar src={owner.image}/>
                    <ChatDetails bold>
                        {owner.name}
                    </ChatDetails>
                </div>
                <TextInput
                    autoComplete="off"
                    placeholder={"جستجو"}
                    type={"text"}
                    name={"search"}
                    //value={}
                    //onChange={handleChange}
                />
            </Owner>
            
            {
                chats.map( (chat, idx) => (
                    <ChatItem 
                        key={idx}
                        onClick={() => handleClickItem(chat)}
                        isActive={(chat.id === index) ? true : false}
                    >
                        <ChatDetails>
                            {chat.name}
                        </ChatDetails>
                    </ChatItem>
                ))
            }
        </ChatList>
    )
}

export default List