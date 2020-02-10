import React from 'react'
import styled from 'styled-components'
import { useChat } from '../react-chat'
import {ChatAvatar, ChatDetails, Button} from './shared-components'

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
`

const Header = () => {
    const { group } = useChat()
    return(
        <ChatHeader>
            <Div>
                <ChatAvatar src={group.image}/>
                <ChatDetails bold>
                    {group.name}
                </ChatDetails>
            </Div>
            <Div>
                <Button>dark theme</Button>
            </Div>
            
        </ChatHeader>
    )
}

export default Header