import React, { type ComponentPropsWithoutRef, type FC } from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;
const Button: FC<ButtonProps | AnchorProps> = (props) => {
  if (props.el === "anchor") {
    return <a></a>;
  }
};

return <button></button>;
export default Button;
