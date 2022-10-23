import type { NextPage } from "next";
import Title from "../ui/components/Title/Title";
import List from "../ui/components/List/List";
import {
  Button,
  Dialog,
  DialogActions,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import { useIndex } from "../data/hooks/pages/useIndex";

const Home: NextPage = () => {
  const {
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
  } = useIndex();

  return (
    <div>
      <Title
        title=""
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            <strong>pode adotar um pet virtualmente</strong>
          </span>
        }
      />
      <List pets={petList} onSelect={(pet) => setPetSelected(pet)} />
      <Dialog
        open={petSelected !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => {
          setPetSelected(null);
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={"E-mail"}
              type={"email"}
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={"Quantia por mês"}
              type={"number"}
              fullWidth
              onChange={(e) => setValue(e.target.value)}
            />
          </Grid>
          <DialogActions sx={{ mt: 5, width: "100%" }}>
            <Button
              color={"secondary"}
              onClick={() => {
                setPetSelected(null);
              }}
            >
              Cancelar
            </Button>
            <Button
              variant={"contained"}
              color={"secondary"}
              onClick={() => adoption()}
            >
              Confirmar adoção
            </Button>
          </DialogActions>
        </Grid>
      </Dialog>
      <Snackbar
        open={message.length > 0}
        message={message}
        autoHideDuration={2500}
        onClose={() => setMessage("")}
      />
    </div>
  );
};

export default Home;
