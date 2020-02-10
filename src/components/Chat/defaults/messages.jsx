import React from 'react'
import styled from 'styled-components'
import { useChat } from '../react-chat'
import { Card, Image, PdfPreview } from './message-preview'

export const ChatMessages = styled.div`
    padding: 16px 24px;
    overflow-y: auto;
    height: 100vh;
`

const Messages = () => {
    const { messages } = useChat()
    return(
        <ChatMessages>
            {
                messages.map( (message, idx) => {
                    return(
                        <Card key={idx}>
                            { message.type === 'image' && <Image src={message.content} /> }
                            { message.type === 'text' && <>{message.content}</> }
                            { message.type === 'pdf' && <>it's a pdf file</> }
                        </Card>
                    )
                })
            }
        </ChatMessages>
    )
}

export default Messages