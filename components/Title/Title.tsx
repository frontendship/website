import React from "react";
import { HtmlHeadLevel } from "types/html.types";
import { StyleTypes } from "types/style.types";
import ModuleStyles from "./Title.module.css";

export type TitleProps = {
  level?: HtmlHeadLevel;
  styles?: StyleTypes;
  children: React.ReactNode;
};

const Title = (props: TitleProps) => {
  const { level = 1, styles: propsStyles = ModuleStyles[`title${props.level}`] } = props;
  return React.createElement(
    `h${level}`,
    {
      className: propsStyles,
    },
    props.children
  );
};

export default Title;
