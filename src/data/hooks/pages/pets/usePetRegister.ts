import { AxiosError } from "axios";
import { useState } from "react";
import { ApiService } from "../../../service/ApiService";

export default function usePetRegister() {
  const [name, setName] = useState(""),
    [history, setHistory] = useState(""),
    [photo, setPhoto] = useState(""),
    [message, setMessage] = useState("");

  function register() {
    if (validadeForm()) {
      ApiService.post("/pets", {
        name,
        history,
        photo,
      })
        .then(() => {
          clear();
          setMessage("Pet cadastrado com sucesso");
        })
        .catch((error: AxiosError | any) => {
          setMessage(error.response?.data.message);
        });
    } else {
      setMessage("Preecha todos os campos");
    }
  }

  function validadeForm() {
    return name.length > 2 && history.length > 20 && photo.length > 10;
  }

  function clear() {
    setName("");
    setPhoto("");
    setHistory("");
  }

  return {
    name,
    history,
    photo,
    setName,
    setHistory,
    setPhoto,
    register,
    message,
    setMessage,
  };
}
