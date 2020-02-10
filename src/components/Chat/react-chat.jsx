import React, { useEffect, useState, useContext } from 'react'

export const ChatContext = React.createContext()
export const useChat = () => useContext(ChatContext)
export const ChatProvider = ({
    owner,
    groups,
    children,
    ...props
}) => {
    const [group, setGroup] = useState(groups[0])
    const [messages, setMessages] = useState(group.messages)
    useEffect( () => {
        
    }, [group])

    const onSelectGroup = group => {
        setGroup(group)
    }

    const sendMessage = ({ message }) => {
        setMessages(messages => [...messages, message])
    }

    return (
        <ChatContext.Provider
            value={{
                owner,
                groups,
                group,
                messages,
                onSelectGroup,
                sendMessage
            }}
        >
            {children}
        </ChatContext.Provider>
    )
    
}