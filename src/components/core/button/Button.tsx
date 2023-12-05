import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import "./button.scss";

type Props = {
  children: ReactNode;
  ariaLabel?: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
};

export default function Button({
  children,
  ariaLabel,
  href,
  target,
  ...props
}: Props) {
  return (
    <a
      className="button"
      aria-label={ariaLabel}
      href={href}
      target={target}
      {...props}
      tabIndex={1}
    >
      {children}
    </a>
  );
}
