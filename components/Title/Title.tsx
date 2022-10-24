import React from "react";
import { StyleTypes } from "../../types/style.types";
import ModuleStyles from "./Title.module.css"

export type TitleProps = {
    level?: number;
    styles?: StyleTypes;
    children: React.ReactNode;
}

const Title = (props : TitleProps) => {
    const { level = 1, styles: propsStyles = ModuleStyles.title } = props;
    return React.createElement(`h${level}`, {
        className: propsStyles,
    }, props.children);
}

export default Title;