import React from 'react'
import styled from 'styled-components'
import { useChat } from '../react-chat'
import { Card, Image, PdfPreview } from './preview'

export const ChatMessages = styled.div`
    padding: 16px 24px;
    overflow-y: auto;
    height: 100vh;
`

const Messages = () => {
    const { chat, conversations} = useChat()
    return(
        <ChatMessages>
            {
                conversations
                    .filter(conversation => conversation.chatId === chat.id)
                    .map( (conversations, idx) => {
                        return(
                            <Card key={idx}>
                                { conversations.type === 'image' && <Image src={conversations.content} /> }
                                { conversations.type === 'text' && <>{conversations.content}</> }
                                { conversations.type === 'pdf' && <>it's a pdf file</> }
                            </Card>
                        )
                })
            }
        </ChatMessages>
    )
}

export default Messages