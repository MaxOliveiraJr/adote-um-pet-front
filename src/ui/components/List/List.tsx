import { Button } from "@mui/material";

import {
  ListStyled,
  ItemList,
  Photo,
  Informations,
  Name,
  Description,
} from "./List.style";

export default function List() {
  return (
    <ListStyled>
      <ItemList>
        <Photo src="https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg" />
        <Informations>
          <Name>Bidu</Name>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus obcaecati repellat facere cumque aperiam. Reprehenderit,
            dicta. Quia accusamus, sapiente, ratione labore rem sit sed omnis
            ducimus cum ea necessitatibus dignissimos.
          </Description>
          <Button variant={"contained"}>Adotar</Button>
        </Informations>
      </ItemList>
    </ListStyled>
  );
}
