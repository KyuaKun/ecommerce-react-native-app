import Botao from "../../components/botao/Botao";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbar/Navbar";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Gradiente } from "../../components/gradiente";
import { InserirImagem } from "./../../components/inserirImagem/InserirImagem";

const AlteraCategoria = () => {
  const nav = useNavigation();

  function telaMarketplace() {
    nav.navigate("Marketplace");
  }

  return (
    <>
      <Gradiente position="top"></Gradiente>
      <Navbar titulo="Alterar Categoria" />
      <Container>
        <Input placeholder="Tec 1" />
        <Input placeholder="imagem5.png" />
        <InserirImagem />
        <Botao onPress={telaMarketplace} texto="ALTERAR" />
      </Container>
      <Gradiente position="bottom"></Gradiente>
    </>
  );
};

export default AlteraCategoria;
