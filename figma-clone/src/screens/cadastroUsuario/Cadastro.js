import React, { useState } from "react";
import { StyleSheet, Pressable, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import {
  Container,
  TituloCadastro,
  TextoEntrar,
  TextoInput,
  TextoCadastrar,
  TextoPergunta,
  BotaoCadastrar,
  UserCard,
} from "./styles";
import { Navbar } from "../../components/navbar/Navbar";

export const Cadastro = () => {
  const [senha,setSenha] = useState();
  const [confirmarSenha, setConfirmarSenha] = useState();
  return (
    <React.Fragment>
      <LinearGradient
        style={{
          flex: 1,
        }}
        start={{ x: 0.2, y: -1 }}
        end={{ x: 0.2, y: 2.5 }}
        locations={[0.3, 0.6]}
        colors={["#00ffff59", "#ffff"]}
      />
      <Container>
        
        <Navbar titulo="Cadastro" />
        <TextoInput placeholder="Nome" />
        <TextoInput placeholder="CPF" />
        <TextoInput placeholder="Data de nascimento" />
        <TextoInput
          placeholder="Senha"
          
        />
        <TextoInput
          placeholder="Confirmar senha"
          
          enablesReturnKeyAutomatically
           />
          <BotaoCadastrar>
            <TextoCadastrar>CADASTRAR</TextoCadastrar>
          </BotaoCadastrar>
          
        </Container>
        <LinearGradient
       style={{
         flex: 1,
       }}
       start={{ x: 0.2, y: 0.6 }}
       end={{ x: 0.2, y: -0.1 }}
       locations={[0.3, 0.9]}
       colors={["#00ffff59", "#ffff"]}
     ></LinearGradient>
        </React.Fragment>
    );
  };
