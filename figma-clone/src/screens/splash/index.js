import React from "react";
import { View} from "react-native";
import { Logo,Container, Image } from './styles';
import { Gradiente } from '../../components/gradiente';

const Splash = () => {
  return (
  <View >
    <Container>
    <Gradiente position="top"></Gradiente>
    <Logo source={require("../../../assets/img/logo.jpeg")}>
    </Logo>
    <Gradiente position="bottom"></Gradiente>
    </Container>
    </View>
  );
};

export default Splash;
