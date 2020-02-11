import React from 'react'
import styled from 'styled-components'
import { useChat } from '../react-chat'
import Toggle from './toggle' 
import {ChatAvatar, ChatDetails } from './shared'

const ChatHeader = styled.div`
    width: 100%;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.border.color};
    color: ${({ theme }) => theme.colors.primary};
`

const Div = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 700;
`

const Header = () => {
    const { chat } = useChat()
    return(
        <ChatHeader>
            <Div>
                <ChatAvatar src={chat.image}/>
                <ChatDetails bold>
                    {chat.name}
                </ChatDetails>
            </Div>
            <Div>
                <Toggle/>تغییر زمینه
            </Div>
            
        </ChatHeader>
    )
}

export default Header