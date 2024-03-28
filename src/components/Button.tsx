import React, {
  type ReactNode,
  type ComponentPropsWithoutRef,
  type FC,
} from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

const Button: FC<ButtonProps | AnchorProps> = (props) => {
  if (props.el === "anchor") {
    const { el, children, ...rest } = props;
    return (
      <a {...rest} className="button">
        {children}
      </a>
    );
  }
  const { el, children, ...rest } = props;
  return (
    <button {...rest} className="button">
      {children}
    </button>
  );
};

export default Button;
