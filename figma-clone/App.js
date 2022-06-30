import React from "react";
import Favoritos from "./src/screens/favoritos/Favoritos";
import { Cadastro } from "./src/screens/cadastroUsuario/Cadastro";
import Senha from "./src/screens/criaSenha/Senha";
import Marketplace from "./src/screens/marketplace/Marketplace";
import Produtos from "./src/screens/produtos/Produtos";
import Login from "./src/screens/login/Login";
import Navbar from "./src/components/navbar/Navbar";
import Carrinho from "./src/screens/carrinho";
import Splash from "./src/screens/splash/index";
import RecuperarSenha from "./src/screens/recuperaSenha/RecuperarSenha";
import ConfirmaSenha from "./src/screens/confirmaSenha";
import ConfirmaCompra from "./src/screens/confirmaCompra";
import ConfirmaCadastro from "./src/screens/confirmaCadastro";
import CadastroProduto from "./src/screens/cadastroProduto";
import CadastroCategoria from "./src/screens/cadastroCategoria";
import AlteraProduto from "./src/screens/alteraProduto";
import AlteraCategoria from "./src/screens/alteraCategoria/index";
import { Footer } from './src/components/footerMenu/FooterMenu';

export default function App() {
  return (
    <>
    <Navbar />
      <Splash />
      <Footer starAtivo/>
    </>
  );
}
