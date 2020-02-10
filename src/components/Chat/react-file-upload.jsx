import { useEffect, useState, useRef } from 'react' 
import { useChat } from './react-chat'

const textTypes = ['doc', 'docx', 'pdf', 'txt']
const imageTypes = ['jpg', 'jpeg', 'png']

export const useUploader = props => {
    const { sendMessage } = useChat()
    const [extError, setExtError] = useState()
    const allowedTypes = useRef()

    useEffect( () => {
        allowedTypes.current = [...textTypes, ...imageTypes]
    })

    const handleFiles = event => {
        const file = event.target.files[0]
        const fileName = file.name
        const [ name, extension ] = fileName.split('.')
        const loweredCaseExt = extension.toLowerCase()
        if(allowedTypes.current.indexOf(loweredCaseExt) === -1) {
            console.log(allowedTypes.current)
            setExtError('file not allowed!!!')
        }
        else {
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = e => {
                if(imageTypes.indexOf(loweredCaseExt) !== -1) {
                    sendMessage({ message : { type: 'image', name: name , content: e.target.result } })
                }
                else if(textTypes.indexOf(loweredCaseExt) !== -1) {
                    console.log(loweredCaseExt)
                    sendMessage({ message : { type: loweredCaseExt, name: name , content: '' } })
                }
            }
        }
        
    }

    const openFileDialog = event => {
        event.preventDefault()
        const fileInput = document.createElement('input')
        fileInput.type = 'file'
        fileInput.onchange = handleFiles
        if(fileInput) fileInput.click()
    }

    return {
        extError,
        openFileDialog
    }
    
}