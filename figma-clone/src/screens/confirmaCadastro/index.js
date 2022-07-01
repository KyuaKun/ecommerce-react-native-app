import React from "react";
import { Container, Logo, TituloCadastro } from "./styles";
import Botao from "./../../components/botao/Botao";
import { useNavigation } from "@react-navigation/native";
import { ReactFragment } from "react";
import { Gradiente } from "../../components/gradiente/index";

const ConfirmaCadastro = () => {
  const nav = useNavigation();

  function telaLogin() {
    nav.navigate("Login");
  }
  return (
    <React.Fragment>
    <Gradiente position="top" />
    <Container>
     
      <Logo source={require("../../../assets/img/logo.jpeg")} />
      <TituloCadastro>Usuário cadastrado com sucesso!</TituloCadastro>
      <Botao onPress={telaLogin} texto="LOGIN" />
    </Container>
     <Gradiente position="bottom" />
     </React.Fragment>
  );
};

export default ConfirmaCadastro;
