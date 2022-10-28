import { Button } from "@mui/material";

import {
  ListStyled,
  ItemList,
  Photo,
  Informations,
  Name,
  Description,
} from "./List.style";

import { Pet } from "../../../data/@Types/Pets";
import { TextService } from "../../../data/service/TextService";

const length = 200;

interface ListProps {
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export default function List(props: ListProps) {
  return (
    <ListStyled>
      {props.pets.map((pet) => (
        <ItemList key={pet.id}>
          <Photo src={pet.photo} alt={pet.name} />
          <Informations>
            <Name>{pet.name}</Name>
            <Description>
              {TextService.textLimited(pet.history, length)}
            </Description>
            <Button
              variant={"contained"}
              fullWidth
              onClick={() => props.onSelect(pet)}
            >
              Adotar {pet.name}
            </Button>
          </Informations>
        </ItemList>
      ))}
    </ListStyled>
  );
}
