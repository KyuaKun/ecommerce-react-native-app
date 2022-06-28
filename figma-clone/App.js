import  React  from 'react';
import Favoritos from "./src/screens/favoritos/Favoritos";
import { Cadastro } from "./src/screens/cadastroUsuario/Cadastro";
import Senha from './src/screens/criaSenha/Senha';
import Marketplace from './src/screens/marketplace/Marketplace';
import Produto  from './src/screens/produtos/styles';
import Login from './src/screens/login/Login';
import Navbar from './src/components/navbar/Navbar';
import Carrinho from './src/screens/carrinho';
import AlteraCategoria from './src/screens/alteraCategoria/index.js';

export default function App() {
  return (
    <>
      <Carrinho />
    </>
  );
}
