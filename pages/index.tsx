import React from 'react';
import GlobalStyle from '../styles/globals';
import LoginPage from './login';
import RegistrationPage from './cadastro';
import InitialListPage from './dashboard';
import HunterPage from './hunterPage';
import ModalHunterPokemon from '../components/ModalHunterPokemon/indext';

const Home: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      {/* <HunterPage /> */}
      <LoginPage />
      {/* <RegistrationPage /> */}
      {/* <InitialListPage /> */}
      <ModalHunterPokemon />
    </>

  );
};

export default Home;
