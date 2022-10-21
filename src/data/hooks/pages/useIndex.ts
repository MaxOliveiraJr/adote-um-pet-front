import { useState } from "react";

export function useIndex() {
  const [petList, setPetList] = useState([
    {
      id: 1,
      name: "Bidu",
      history: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim nemo quis placeat doloremque eligendi ratione officia voluptate! Voluptatem voluptatibus voluptate ad id perspiciatis culpa voluptas quod sequi recusandae debitis.
 `,
      photo:
        "https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg",
    },
    {
      id: 2,
      name: "Bidu",
      history: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim nemo quis placeat doloremque eligendi ratione officia voluptate! Voluptatem voluptatibus voluptate ad id perspiciatis culpa voluptas quod sequi recusandae debitis.
 `,
      photo:
        "https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg",
    },
  ]);

  return {
    petList
  };
}
