import React, { useEffect } from "react";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";

export default function IntroScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate("StartScreen");
        }, 3000);
         return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigation]);
  return (
    <Background>
      <Logo />
      <Header>PawNPlaces</Header>
      <Paragraph>
      Discover pet-friendly parks, cafes NOW!
      </Paragraph>
     
    </Background>
  );
}
