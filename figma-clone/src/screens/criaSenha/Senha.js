import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Container,
  Logo,
  TituloSenha,
  TextoInput,
  BotaoAlterar,
  TextoAlterar,
} from "./styles";

const Senha = () => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      start={{ x: 270, y: 270 }}
      end={{ x: 250, y: 0.5 }}
      locations={[0, 0.4, 0.6]}
      colors={["#00ffff59", "#ffff"]}
    >
      <Container>
        <Logo source={require("../../../assets/img/logo.jpeg")} />
        <TituloSenha>Criar Senha</TituloSenha>
        <TextoInput placeholder="Digite sua nova senha" />
        <TextoInput placeholder="Repita sua nova senha" />
        <BotaoAlterar>
          <TextoAlterar>ALTERAR</TextoAlterar>
        </BotaoAlterar>
      </Container>
    </LinearGradient>
  );
};

export default Senha;