import React, { useEffect, useState } from 'react'
import { useChat } from '../react-chat'
import styled from 'styled-components'

const Root = styled.div`
    background-color: ${ ({ theme }) => theme.colors.primary };
    width: 30px;
    height: 10px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 0.5em;
    cursor: pointer;
`
const Handler = styled.div`
    background-color: ${ ({ theme }) => theme.backgroundColor };
    border: 0.2em solid ${({ theme }) => theme.border.color};
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 250ms ease-in-out;
    transform: ${props => props.on ? 'translateX(-100%)' : 'translateX(0)'};
`


const Toggle = props => {
    const [ toggle, setToggle] = useState(false)
    const { changeTheme } = useChat()
    const handleClick = () => {
        setToggle(!toggle)
        changeTheme(toggle)
    }
    return (
        <Root onClick={handleClick}>
            <Handler on={toggle}/>
        </Root>
    )
}

export default Toggle