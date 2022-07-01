import Botao from "../../components/botao/Botao";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbar/Navbar";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

const AlteraCategoria = () => {
  const nav = useNavigation();

  function telaMarketplace() {
    nav.navigate("Marketplace");
  }

  return (
    <Container>
      <Navbar titulo="Alterar Categoria" />
      <Input placeholder="Tec 1" />
      <Input placeholder="imagem5.png" />
      <Botao onPress={telaMarketplace} texto="ALTERAR" />
    </Container>
  );
};

export default AlteraCategoria;
