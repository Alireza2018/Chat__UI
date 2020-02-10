import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import MaterialIcon from 'material-icons-react';
//Import themes 
import ligth from './themes/ligth_theme.json'
import dark from './themes/dark_theme.json' 
//Import custom hook
import { useChat } from './react-chat' 
import { useUploader } from './react-file-upload' 
//Import componets
import { ChatActions, InputBox, Button } from './defaults/shared-components'
import ChatList from './defaults/chat-list'
import ChatHeader from './defaults/header'
import ChatMessages from './defaults/messages'
import TextInput from '../TextInput'


export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    background-color: ${({ theme }) => theme.backgroundColor}
`
export const Content = styled.div`
    width: calc(100vw - 300px);
    height: 100vh;
    position: relative;
`

const ChatLayout = props => {
    const initialData = {message: ''}
    //My custom hooks
    const { openFileDialog } = useUploader()
    const { group, sendMessage } = useChat()
    //Component state
    const [data, setData] = useState(initialData)
    const [theme, setTheme] = useState(ligth)

    const handleChange = event => {
        let newData = { ...data }
        newData[event.target.name] = event.target.value
        setData(newData)
    }
    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            sendMessage({ message : { type: 'text', content: data.message } })
            setData(initialData)
        }
    }
    
    return(
        <ThemeProvider theme={theme}>
            <Wrapper>
                <ChatList/>
                <Content>
                    <ChatHeader group={group}/>
                    <ChatMessages/>
                    <ChatActions>
                        <InputBox width="70%">
                            <TextInput
                                autoComplete="off"
                                placeholder={"پیغام خود را وارد کنید"}
                                type={"text"}
                                name={"message"}
                                value={data.message}
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}
                            />
                        </InputBox>
                        <Button onClick={openFileDialog}>
                            <MaterialIcon icon="attachment" color={theme.buttons.primary}/>
                        </Button>
                    </ChatActions>
                </Content>
            </Wrapper>
        </ThemeProvider>
    )
}

export default ChatLayout