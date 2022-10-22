import { Text } from "./Title.style";

type TitleProps = {
  text: string;
};

function Title(props: TitleProps) {
  return <Text>{props.text}</Text>;
}

export default Title;
