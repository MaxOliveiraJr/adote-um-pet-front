import { TitleStyled, Subtitle } from "./Title.style";

interface TituloProps {
    title: string;
    subtitle?: string | JSX.Element;
}

export default function Title (props:TituloProps){
    return (
      <>
        {/* {" asaaadasdasd"} */}
        <TitleStyled>{props.title}</TitleStyled>
        <Subtitle>{props.subtitle}</Subtitle>
      </>
    );  
}