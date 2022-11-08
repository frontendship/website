import { HtmlHeadLevel } from "types/html.types";
import ModuleStyles from "./Title.module.css";
import React from "react";
import { StyleTypes } from "types/style.types";

export type TitleProps = {
  level?: HtmlHeadLevel;
  styles?: StyleTypes;
  children: React.ReactNode;
  className?: string;
};

const Title = (props: TitleProps) => {
  const { level = 1, styles: propsStyles = ModuleStyles[`title-h${level}`] } =
    props;
  return React.createElement(
    `h${level}`,
    {
      className: `${propsStyles} ${props.className && props.className}`,
    },
    props.children
  );
};

export default Title;
