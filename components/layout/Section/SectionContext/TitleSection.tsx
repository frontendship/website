import { Title } from "components";
import { HtmlHeadLevel } from "types/html.types";
import { StyleTypes } from "types/style.types";
import TitleSectionStyle from "./TitleSection.module.css";

type TitleSectionProps = {
  level?: HtmlHeadLevel;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  subtitleStyles?: string | StyleTypes;
  titleStyles?: string | StyleTypes;
  className?: string;
};

type SubTitleProps = {
  text?: string | React.ReactNode;
  styles?: string | StyleTypes;
};
const SubTitle = (props: SubTitleProps) => {
  if (typeof props.text == "string") {
    return (
      <p
        className={`${TitleSectionStyle.subTitle} ${
          props.styles && props.styles
        }`}
      >
        {props.text}
      </p>
    );
  }
  return <>{props.text}</>;
};
const TitleSection = (props: TitleSectionProps) => {
  return (
    <div
      className={`flex flex-col items-center ${
        props.className && props.className
      }`}
    >
      <Title level={2} styles={props.titleStyles}>
        {props.title}
      </Title>
      {props.subtitle && (
        <SubTitle text={props.subtitle} styles={props.subtitleStyles} />
      )}
    </div>
  );
};

export default TitleSection;
