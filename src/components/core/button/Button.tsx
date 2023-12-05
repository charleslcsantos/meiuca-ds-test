import { ReactNode } from "react";
import "./button.scss";

type Props = {
  children: ReactNode;
  ariaLabel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ children, onClick }: Props) {
  return (
    <button className="button" onClick={onClick} tabIndex={1}>
      {children}
    </button>
  );
}
