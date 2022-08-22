import styled from "styled-components";

const Body = styled.div`
  width: 500px;
  border: 2px solid #cecbcb;
  padding: 20px;
`

const Title = styled.h5`
  font-size: 20px;
  margin-bottom: 10px;
  
`

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`

const Button = styled.button`
  font-size: 16px;
  color: #fff;
  border: none;
  background-color: #1d5fd7;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color linear .3s;
  &:hover {
    background-color: #6083c7
  }
`

export const Styled = {
    Body,
    Title,
    Text,
    Button
}