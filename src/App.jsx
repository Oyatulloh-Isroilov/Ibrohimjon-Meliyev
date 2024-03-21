import React from 'react';
import DarkVariantExample from "./components/DarkVariantExample"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Info from "./components/Info"
import Rezyume from "./components/Rezyume"
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <DarkVariantExample />
      <Rezyume />
      <Info />
      <Footer />
    </>
  );
}

export default App;
