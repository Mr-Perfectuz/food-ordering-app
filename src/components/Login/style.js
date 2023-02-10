import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0 131px;

  @media (max-width: 1280px) {
    padding: 0 116px;
  }
  @media (max-width: 1278px) {
    padding: 0 90px;
  }
  @media (max-width: 884px) {
    grid-template-columns: repeat(1fr, 1fr);
    padding: 0 90px;
  }
  @media (max-width: 640px) {
    padding: 0 50px;
  }
  @media (max-width: 540px) {
    padding: 0 40px;
  }
  @media (max-width: 428px) {
    padding: 0 20px;
  }
`

const Input = styled.input`
  outline: none;
  height: 40px;
  padding-left: 15px;

  `

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  border-radius: 5px;
  border: 1px solid black;
  margin: auto;
`


export { Container, Wrapper, Input, Form }