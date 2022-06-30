import React from "react";
import { Container } from "./styles"
import { View, Text, Image } from "react-native";
import { AntDesign, Feather,Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import styled from "styled-components/";


export const Footer = (props) => {
  let homeAtivo = props.homeAtivo ? 'blue' : 'grey';
  let bagAtivo = props.bagAtivo ? 'blue' : 'grey';
  let starAtivo = props.starAtivo ? 'blue' : 'grey';
  let shoppingAtivo = props.shoppingAtivo ? 'blue' : 'grey';
  return (
    <View >
      <Container>
      <Ionicons name="home-outline" size={24} color={homeAtivo}/>
      <SimpleLineIcons name="bag" size={24} color={bagAtivo} />
      <Feather name="star" size={24} color={starAtivo} />
      
      <AntDesign name="shoppingcart" size={24} color={shoppingAtivo} />
      </Container>
    </View>
  );
};

export default Footer;
