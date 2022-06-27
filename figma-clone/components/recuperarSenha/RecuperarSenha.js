import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Container,
  Logo,
  TituloSenha,
  TextoInput,
  BotaoRecuperar,
  TextoRecuperar,
} from "./styles";

const RecuperarSenha = () => {
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
        <Logo source={require("../../assets/img/logo.jpeg")} />
        <TituloSenha>Recuperar Senha</TituloSenha>
        <TextoInput placeholder="Digite seu CPF" />
        <BotaoRecuperar>
          <TextoRecuperar>RECUPERAR</TextoRecuperar>
        </BotaoRecuperar>
      </Container>
    </LinearGradient>
  );
};

export default RecuperarSenha;