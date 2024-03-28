import React, {
  type ReactNode,
  type ComponentPropsWithoutRef,
  type FC,
} from "react";

type ButtonProps = {} & ComponentPropsWithoutRef<"button"> & {
    href?: never;
  };

type AnchorProps = {} & ComponentPropsWithoutRef<"a"> & {
    href?: string;
  };

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}
const Button: FC<ButtonProps | AnchorProps> = (props) => {
  if (isAnchorProps(props)) {
    const { children, ...rest } = props;
    return (
      <a {...rest} className="button">
        {children}
      </a>
    );
  }
  const { children, ...rest } = props;
  return (
    <button {...rest} className="button">
      {children}
    </button>
  );
};

export default Button;
