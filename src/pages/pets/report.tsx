import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { NextPage } from "next";
import { useReport } from "../../data/hooks/pages/pets/useReport";
import Title from "../../ui/components/Title/Title";

const Report: NextPage = () => {
  const { reportList } = useReport();

  console.log("max", reportList);

  return (
    <>
      <Title
        title={"Relatório de Adoção"}
        subtitle={"Veja a Lista de Pets Adotados"}
      />
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 830, mx: "auto", p: { xs: 3, md: 5 }, border: "1px" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pet</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell align={"right"}>Valor Mensal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reportList.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell>{item.pet.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell align={"right"}>{item.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Report;
