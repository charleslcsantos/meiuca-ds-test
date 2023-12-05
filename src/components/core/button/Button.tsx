import { ReactNode } from "react";
import "./button.scss";

type Props = {
  children: ReactNode;
  ariaLabel?: string;
};

export default function Button({ children, ariaLabel, ...props }: Props) {
  return (
    <a className="button" aria-label={ariaLabel} {...props} tabIndex={1}>
      {children}
    </a>
  );
}
