import styled from 'styled-components'

export const ListTemp = styled.div`
    height: 90vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ListComponents = styled.div`
    width: 400px;
    display: flex;
    flex-direction: row;
    margin: 50px 100px;
`

export const CompoLeft = styled.div`
    background-color: #CFE7F7;
    width: 40%;
    height: 100px;
    border-radius: 30px 0 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    font-size: 25px;
`

export const CompoRight = styled.div`
    background-color: #fff;
    width: 60%;
    height: 100px;
    border-radius: 0 30px 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
        font-size: 30px;
        margin: 5px;
    font-weight: bold;
    }
    p {
        font-size: 15px;
    }
`

export const RealTime = styled.div`
    width: 100%;
    display: flex;
`

export const BoxRealTime = styled.div`
    width: 100%;
    padding: 50px 50px 50px 0;
`

export const RTDetails = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50px;
    border: 10px solid #CFE7F7;
`