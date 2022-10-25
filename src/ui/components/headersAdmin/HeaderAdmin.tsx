import NextLink from "next/link";
import { HeaderContainer, Logo, LinksContainer } from "./HeaderAdmin.style";
import { Link, Box } from "@mui/material";
export default function HeaderAdmin() {
  return (
    <HeaderContainer>
      <div>
        <Logo src={"/imagens/logo.svg"}></Logo>
        <LinksContainer>
          <Link component={NextLink} href={"/pets/register"}>
            <a> Cadastrar</a>
          </Link>
          <Link component={NextLink} href={"/pets/report"}>
            <a>
              Relatório
              <Box
                component={"span"}
                sx={{ display: { sm: "initial", xs: "none" } }}
              >
                de adoção
              </Box>
            </a>
          </Link>
        </LinksContainer>
      </div>
    </HeaderContainer>
  );
}
