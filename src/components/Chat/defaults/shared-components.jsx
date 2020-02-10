import styled from 'styled-components'

export const ChatItem = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: ${props => props.isActive ? ({ theme }) => theme.activeGroup.background : 'transparent'};
    margin: 0.1em 0;
    border-radius: 50px 0 0 50px;
    padding: 0.5em 2em 0.5em 1em;
    color: ${props => props.isActive ? ({ theme }) => theme.activeGroup.color : ({ theme }) => theme.colors.primary};
    &:hover {
        background-color: ${props => (!props.isActive) ? ({ theme }) => theme.colors.secondary : ({ theme }) => theme.activeGroup.background}
    }
` 

export const InputBox = styled.div`
    background-color: #f2f2f2;
    border-radius: 50px;
    padding: 1em;
    width: ${props => props.width};
`

export const ChatAvatar = styled.img`
    width: 5em;
    height: 5em;
    object-fit: cover;
    border-radius: 50%;
`

export const ChatDetails = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    font-weight: ${props => props.bold ? '700' : 'unset'};
    & span {
        font-size: 1.1rem;
    }
`

export const ChatActions = styled.div`
    width: inherit;
    padding: 2em 10em 2em 1em;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundColor};
    border-top: 1px solid ${({ theme }) => theme.border.color};
`

export const Button = styled.button`
    border: 0;
    outline: 0;
    background-color: transparent;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.border.radius};
`