import type { NextPage } from "next";
import Title from "../ui/components/Title/Title";
import List from "../ui/components/List/List";
import { Button, Dialog,DialogActions ,Grid, Snackbar, TextField } from "@mui/material";
import { useIndex } from "../data/hooks/pages/useIndex";

const Home: NextPage = () => {

 const {petList} = useIndex();

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
      <List
        pets={petList}
      />
      <Dialog open={false} fullWidth PaperProps={{ sx: { p: 5 } }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
            label={"E-mail"} 
            type={'email'}
            fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField 
            label={"Quantia por mês"} 
            type={'number'}
            fullWidth />
          </Grid>
          <DialogActions sx={{ mt: 5, width:'100%' }}>
            <Button color={"secondary"}>Cancelar</Button>
            <Button variant={"contained"} color={"secondary"}>
              Confirmar adoção
            </Button>
          </DialogActions>
        </Grid>
      </Dialog>
      <Snackbar  
      open={false}
      message={'osdisdf'}
      />
    </div>
  );
};

export default Home;
