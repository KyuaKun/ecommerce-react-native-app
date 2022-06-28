import { Text, Image } from "react-native";
import {
  Container,
  Navbar,
  TituloProduto,
  ProdutosContainer,
  Produto,
  FotoProduto,
  NomeProduto,
  Preco,
  Estoque,
  Contador,
  Icones,
} from "./styles";

const Produtos = () => {
  return (
    <Container>
      <Navbar titulo="Produtos" />

      <ProdutosContainer>
        <Produto>
          <FotoProduto source={require("../../assets/img/5.jpg")} />
          <NomeProduto>Produto 1</NomeProduto>
          <Preco>Preço R$ 25,00</Preco>
          <Estoque>10 unidades em estoque</Estoque>
          <Contador />
        </Produto>
        <Produto>
          <FotoProduto source={require("../../assets/img/5.jpg")} />
          <NomeProduto>Produto 2</NomeProduto>
          <Preco>Preço R$ 50,00</Preco>
          <Estoque>1 unidade em estoque</Estoque>
          <Contador />
        </Produto>
        <Produto>
          <FotoProduto source={require("../../assets/img/5.jpg")} />
          <NomeProduto>Produto 3</NomeProduto>
          <Preco>Preço R$ 30,00</Preco>
          <Estoque>5 unidades em estoque</Estoque>
          <Contador />
        </Produto>
        <Produto>
          <FotoProduto source={require("../../assets/img/5.jpg")} />
          <NomeProduto>Produto 4</NomeProduto>
          <Preco>Preço R$ 100,00</Preco>
          <Estoque>15 unidades em estoque</Estoque>
          <Contador />
        </Produto>
        <Produto>
          <FotoProduto source={require("../../assets/img/5.jpg")} />
          <NomeProduto>Produto 5</NomeProduto>
          <Preco>Preço R$ 40,00</Preco>
          <Estoque>20 unidades em estoque</Estoque>
          <Contador />
        </Produto>
        <Produto>
          <FotoProduto source={require("../../assets/img/5.jpg")} />
          <NomeProduto>Produto 6</NomeProduto>
          <Preco>Preço R$ 70,00</Preco>
          <Estoque>8 unidades em estoque</Estoque>
          <Contador />
        </Produto>
      </ProdutosContainer>
      <Icones>
        <Text>Casa</Text>
        <Text>Bolsa</Text>
        <Text>Estrela</Text>
        <Text>Carrinho</Text>
      </Icones>
    </Container>
  );
};

export default Produtos;
