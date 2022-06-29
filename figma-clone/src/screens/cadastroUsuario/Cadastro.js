import { useState } from "react";
import { StyleSheet, Pressable, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTogglePasswordVisibility } from "./hooks";
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
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [senha, setSenha] = useState();
  const [confirmarSenha, setConfirmarSenha] = useState();
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
        <Navbar titulo="Cadastro" />
        <TextoInput placeholder="Nome" />
        <TextoInput placeholder="CPF" />
        <TextoInput placeholder="Data de nascimento" />
        <TextInput
          placeholder="Senha"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry
          value={senha}
          enablesReturnKeyAutomatically
          onChangeText={(text) => setSenha(text)}
        />
        <TextInput
          placeholder="Confirmar senha"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry
          value={confirmarSenha}
          enablesReturnKeyAutomatically
          onChangeText={(text) => setConfirmarSenha(text)}
        />
        <Pressable onPress={handlePasswordVisibility}></Pressable>
        <BotaoCadastrar>
          <TextoCadastrar>CADASTRAR</TextoCadastrar>
        </BotaoCadastrar>
      </Container>
    </LinearGradient>
  );
};
