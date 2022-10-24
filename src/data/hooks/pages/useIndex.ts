import { useEffect, useState } from "react";
import { Pet } from "../../@Types/Pets";
import { ApiService } from "../../service/ApiService";
import { AxiosError } from "axios";

export function useIndex() {
  const [petList, setPetList] = useState<Pet[]>([]);

  const [petSelected, setPetSelected] = useState<Pet | null>(null);
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    ApiService.get("/pets").then((response) => {
      setPetList(response.data);
    });
  }, []);

  function adoption() {
    console.log("oi");
    if (petSelected !== null) {
      if (adoptionDataValidate()) {
        ApiService.post("adocoes", {
          pet_id: petSelected.id,
          email,
          value,
        })
          .then(() => {
            setPetSelected(null);
            setMessage("Doação realizada com sucesso");
            clearForm();
          })
          .catch((error: AxiosError) => {
            setMessage(error.response?.data.message);
          });
      } else {
        setMessage("Preencha todos os campos corretamente!");
      }
    }
  }

  function adoptionDataValidate() {
    return email.length > 0 && value.length > 0;
  }

  function clearForm() {
    setEmail("");
    setValue("");
  }

  return {
    petList,
    petSelected,
    setPetSelected,
    email,
    setEmail,
    value,
    setValue,
    message,
    setMessage,
    adoption,
  };
}
