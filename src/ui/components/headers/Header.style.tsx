import { styled } from "@mui/material";
//const paddingSize = '20px';
 /* padding:${paddingSize}; */
  /* //padding: ${(props) => props.theme}; */

export const HeaderContainer = styled("header")`
  display: flex;
  color: red;
  justify-content: center;
  border-bottom: 1px solid #f0f0f0;
 
  padding: ${({theme})=>theme.spacing(6)};
`;
export const Logo = styled('img') `
    width:230px;
`;
