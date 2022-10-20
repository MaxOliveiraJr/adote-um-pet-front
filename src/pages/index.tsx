import type { NextPage } from "next";
import Title from "../ui/components/Title/Title";
import List from "../ui/components/List/List";

const Home: NextPage = () => {
  return (
    <div>
      <Title
        title="asdasdasd"
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            <strong>pode adotar um pet virtualmente</strong>
          </span>
        }
      />
      <List
        pets={[
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
        ]}
      />
    </div>
  );
};

export default Home;
