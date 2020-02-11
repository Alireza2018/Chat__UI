import React, { useState, useContext } from 'react'
//Import themes 
import ligth from './themes/ligth_theme.json'
import dark from './themes/dark_theme.json' 

export const ChatContext = React.createContext()
export const useChat = () => useContext(ChatContext)
export const ChatProvider = ({
    owner,
    chats,
    children,
    ...props
}) => {
    const [theme, setTheme] = useState(ligth)
    const [chat, setChat] = useState(chats[0])
    const [conversations, setConversations] = useState([])

    const changeTheme = theme => {
        setTheme(theme ? ligth : dark)
    }

    const onSelectChat = chat => {
        setChat(chat)
    }

    const sendMessage = ({ message }) => {
        setConversations(conversations => [...conversations, message])
    }

    return (
        <ChatContext.Provider
            value={{
                theme,
                owner,
                chats,
                chat,
                conversations,
                changeTheme,
                onSelectChat,
                sendMessage
            }}
        >
            {children}
        </ChatContext.Provider>
    )
    
}