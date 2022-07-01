import React from "react";
import { ReactFragment } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Navbar } from "../../components/navbar/Navbar";
import { Input } from "../../components/input/Input";
import { InputSenha } from "../../components/inputSenha/index";
import { Botao } from "../../components/botao/Botao";
import { useNavigation } from "@react-navigation/native";
import { Gradiente } from "../../components/gradiente/index";
import { Container } from "./styles";

export const Cadastro = () => {
  const nav = useNavigation();

  function telaConfirmaCadastro() {
    nav.navigate("ConfirmaCadastro");
  }

  return (
    <React.Fragment>
      <Navbar titulo="Cadastro" />
      <Gradiente position="top" />
      <Container>
      
        <Input placeholder="Nome" />
        <Input placeholder="CPF" />
        <Input placeholder="Data de nascimento" />
        <InputSenha placeholder="Senha" />
        <InputSenha placeholder="Confirmar senha" />
        <Botao onPress={telaConfirmaCadastro} texto="CADASTRAR" />
        
      </Container>
      <Gradiente position="bottom" />
      </React.Fragment>
  );
};
