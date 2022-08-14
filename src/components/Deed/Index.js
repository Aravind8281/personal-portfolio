import React from 'react'
import styled from 'styled-components'

export default function Deed() {
  return (
    <Container>
      <h2>Certificates and Projects</h2>
      <Content>
        <Wrap>
            <img src='/Images/node.png' alt=''/>
        </Wrap>
        <Wrap>
            <img src='/Images/ciss.png'alt=''/>
        </Wrap>
        <Wrap>
            <img src='/Images/python.png'alt=''/>
        </Wrap>
        <Wrap>
            <img src='/Images/excel.png'alt=''/>
        </Wrap>
        <Wrap>
            <img src='/Images/data.png'alt=''/>
        </Wrap>
        <Wrap>
            <img src='/Images/html.jpeg'alt=''/>
        </Wrap>
        <Wrap>
            <img src='/Images/workshop.png'alt=''/>
        </Wrap>
        <Wrap>
            <img src='/Images/py.png'alt=''/>
        </Wrap>
        <Wrap>
            <img src='/Images/py.png'alt=''/>
        </Wrap>
        <Wrap>
            <img src='/Images/py.png'alt=''/>
        </Wrap>
      </Content>
    </Container>
  )
}

const Container=styled.div`
    overflow:scroll;
    h2{
        color:white;
        font-size:25px;
        font-weight:bold;
        padding-left:10rem;
        letter-spacing:2px;
    }
`
const Content=styled.div`
    padding-left:10rem;
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(3,minmax(0,1fr));
`
const Wrap=styled.div`
    max-width:30rem;
    max-height:30rem;
    border-radius:10px;
    overflow:hidden;
    cursor:pointer;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    img{
        width:100%;
        height:100%;
        background-size:cover;
        
    }
    &:hover{
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);
        box-shadow:rgb(0 0 0 /80%) 0px 40px 58px -16px,
        rgb(0 0 0 /72%) 0px 30px 22px -10px;
    }
`