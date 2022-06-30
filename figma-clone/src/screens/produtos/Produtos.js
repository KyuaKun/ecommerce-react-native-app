import { Container } from "./styles";
import Footer from "./../../components/footerMenu/FooterMenu";
import { Navbar } from "./../../components/navbar/Navbar";
import { Cards } from "../../components/cards/Cards";
import { AntDesign } from "@expo/vector-icons";

const Produtos = () => {
  return (
    <Container>
      <Navbar titulo="Produtos" />
      <AntDesign name="plus" size={18} color="darkblue" />
      <Cards
        nome="Produto 1"
        preco="R$25,00"
        estoque="10 unidades em estoque"
        contador="2"
      />
      <Cards
        nome="Produto 2"
        preco="R$50,00"
        estoque="1 unidade em estoque"
        contador="0"
      />
      <Cards
        nome="Produto 3"
        preco="R$30,00"
        estoque="5 unidades em estoque"
        contador="0"
      />

      <Cards
        nome="Produto 4"
        preco="R$100,00"
        estoque="15 unidades em estoque"
        contador="1"
      />
      <Cards
        nome="Produto 5"
        preco="R$40,00"
        estoque="20 unidades em estoque"
        contador="1"
      />
      <Cards
        nome="Produto 6"
        preco="R$70,00"
        estoque="8 unidades em estoque"
        contador="0"
      />
      <Footer />
    </Container>
  );
};

export default Produtos;
