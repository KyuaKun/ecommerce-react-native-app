import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-web";

// import { Container } from './styles';

const Login = () => {
  return (
    <>
      <TextInput type="text" placeholder="Digite seu login" />
      <TextInput type ="password" placeholder="Digite sua senha"/>
    </>
  );
};

export default Login;
