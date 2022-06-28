import styled from "styled-components/native";
import Botao from "../../components/botao/Botao";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbar/Navbar";

export const Container = styled.View`
  box-sizing: border-box;
  flex-wrap: nowrap;
  border: 1px solid black;
  flex: 1;
  flex-direction: column;
`;

const AlteraCategoria = () => {
  return (
    <Container>
      <Navbar titulo="Alterar Categoria" />

      <Botao texto="ALTERAR" />
    </Container>
  );
};

export default AlteraCategoria;
