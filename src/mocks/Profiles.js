import perfil1 from "../assets/images/Foto-perfil.svg";
import perfil2 from "../assets/images/Foto-perfil2.svg";
import Preferencias from "../components/Preferencias/Preferencias";
import { vetorImage, vetorImage2 } from "./imagesPreferences";

export const profiles = [
  {
    id: 1,
    name: "Isabel",
    img: perfil1,
    age: "18 anos",
    ocupation: "Estudante - UFMG",
    preferences: <Preferencias vetorImage={vetorImage} />,
    bio:
      "Olá! Sou Isabel, estou me mudando do interior de MG para BH, para cursar Direito na UFMG. Quero conhecer outras estudantes da faculdade para dividir apto e a experiência de ser universitárias! 😊😁👩‍🎓👩‍🎓",
  },
  {
    id: 2,
    name: "Marcos",
    img: perfil2,
    age: "26 anos",
    ocupation: "Trainee - Unilever",
    preferences: <Preferencias vetorImage={vetorImage2} />,
    bio:
      "Meu nome é Marcos, sou recém formado em Engenharia de Produção. Estou me mudando pra SP para trabalhar e gostaria de encontrar outras pessoas para dividir apto que tenham os mesmos hábitos que os meus.",
  },
];
