import "./Heading.scss";

type Props = {
  children: React.ReactNode;
  tabIndex?: number;
  size?: "small";
};

export default function Heading({ children, tabIndex, size = "small" }: Props) {
  return (
    <h2 className={`heading ${size && "heading--small"}`} tabIndex={tabIndex}>
      {children}
    </h2>
  );
}
