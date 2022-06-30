import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Input from "../../components/input/Input";
import { InputSenha } from "../../components/inputSenha";
import Botao from "../../components/botao/Botao";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Container, Logo, TituloLogin, TextInfo, WrapperTextInfo, TextLink  } from "./styles";
import { SafeAreaView } from "react-native";



const Login = () => {
  return (
      <Container>
        <Logo source={require("../../../assets/img/logo.jpeg")} />
        <TituloLogin>Login</TituloLogin>
        <Input placeholder="Digite seu login" />
        <InputSenha placeholder="Digite sua senha" />
                <TextInfo>
                <TextLink>Esqueceu a sua senha? Clique aqui!</TextLink>
                </TextInfo>
        <Botao texto="ENTRAR" />
                <TextInfo>
                    <TextLink>Não possui cadastro? Cadastre-se aqui.</TextLink>
                </TextInfo>
      </Container>
  );
};

export default Login;
