import React from "react";
import { View,  } from "react-native";
import { Logo, Image } from './styles';
import { Gradiente } from '../../components/gradiente';

const Splash = () => {
  return (
  <View >
    <Gradiente position="top"></Gradiente>
    <Logo source={require("../../../assets/img/logo.jpeg")}>
    </Logo>
    <Gradiente position="bottom"></Gradiente>
    </View>
  );
};

export default Splash;
