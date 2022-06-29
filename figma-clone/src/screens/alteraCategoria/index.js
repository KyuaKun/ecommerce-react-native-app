import styled from "styled-components/native";
import Botao from "../../components/botao/Botao";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbar/Navbar";
import { Container } from "./styles";

const AlteraCategoria = () => {
  return (
    <Container>
      <Navbar titulo="Alterar Categoria" />
      <Input placeholder="Tec 1" />
      <Input placeholder="imagem5.png" />
      <Botao texto="ALTERAR" />
    </Container>
  );
};

export default AlteraCategoria;
