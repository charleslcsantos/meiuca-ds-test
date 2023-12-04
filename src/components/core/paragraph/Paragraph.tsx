import "./Paragraph.scss";

type Props = {
  children: React.ReactNode;
  tabIndex?: number;
  size?: "small";
};

export default function Paragraph({
  children,
  tabIndex,
  size = "small",
}: Props) {
  return (
    <p
      className={`paragraph ${size && "paragraph--small"}`}
      tabIndex={tabIndex}
    >
      {children}
    </p>
  );
}
