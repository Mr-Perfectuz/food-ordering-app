import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border: 1px solid black;
`

const Nav = styled.nav`
  max-width: 1440px;
  width: 100%;
  padding:  10px 131px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

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

Nav.Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;


`
Nav.Column.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;

`

Nav.Column.Wrapper.Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: fit-content;
`

Nav.Column.Title = styled.h4``

const Logo = styled.img`
  width: 52px;
  height: 52px;

  @media (max-width: 428px) {
  width:32px;
  height: 32px;

  }
`
Nav.Column.Ul = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 100%;
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding:  0 131px;
  margin: auto;

  @media screen and (max-width: 1280px) {
    padding: 0 116px;
  }
`

export { Container, Nav, Wrapper, Logo, Icons };
