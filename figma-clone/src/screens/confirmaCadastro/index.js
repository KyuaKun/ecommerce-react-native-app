import React from "react";
import { Container, Logo, TituloCadastro } from "./styles";
import Botao from "./../../components/botao/Botao";
import { useNavigation } from "@react-navigation/native";

const ConfirmaCadastro = () => {
  const nav = useNavigation();

  function telaLogin() {
    nav.navigate("Login");
  }
  return (
    <Container>
      <Logo source={require("../../../assets/img/logo.jpeg")} />
      <TituloCadastro>Usuário cadastrado com sucesso!</TituloCadastro>
      <Botao onPress={telaLogin} texto="LOGIN" />
    </Container>
  );
};

export default ConfirmaCadastro;
