import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    user-select: none;
    padding: 1em;
    &:hover {
        background-color: ${({ theme }) => theme.colors.previewHover}
    }
`
export const Image = styled.img`
    width: 15em;
    min-height: 100%;
    object-fit: fill;
`
export const PdfPreview = styled.div``