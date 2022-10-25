import { Paper, Grid, TextField, Button, Snackbar } from "@mui/material";
import { NextPage } from "next";
import usePetRegister from "../../data/hooks/pages/pets/usePetRegister";
import Title from "../../ui/components/Title/Title";
const PetRegister: NextPage = () => {
  const {
    name,
    history,
    photo,
    setName,
    setHistory,
    setPhoto,
    register,
    message,
    setMessage,
  } = usePetRegister();

  return (
    <>
      <Title
        title={"Cadastro de Pets para Adoção"}
        subtitle={"Preencha os Dados do Novo Pet"}
      />
      <Paper sx={{ maxWidth: 970, mx: "auto", p: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              label={"Nome"}
              placeholder={"Digite o nome do pet"}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={history}
              onChange={(e) => setHistory(e.target.value)}
              fullWidth
              label={"História do pet"}
              multiline
              rows={4}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              fullWidth
              label={"Foto"}
              type={"url"}
              placeholder={"Digite o endereço da imagem"}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant={"contained"}
              color={"secondary"}
              sx={{ mt: 2 }}
              component={"a"}
              href={"https://imgur.com/upload"}
              target={"_Blank"}
            >
              Enviar Imagem
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button
              onClick={register}
              variant={"contained"}
              color={"secondary"}
              sx={{ maxWidth: { md: 200 } }}
              component={"a"}
              target={"_Blank"}
              fullWidth
            >
              Cadastrar Pet
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Snackbar
        open={message.length > 0}
        autoHideDuration={2500}
        onClose={() => setMessage("")}
        message={message}
      ></Snackbar>
    </>
  );
};

export default PetRegister;
