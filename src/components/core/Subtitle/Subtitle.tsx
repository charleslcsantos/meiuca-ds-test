import "./Subtitle.scss";

type Props = {
  children: React.ReactNode;
  tabIndex?: number;
  size?: "small";
};

export default function Subtitle({
  children,
  tabIndex,
  size = "small",
}: Props) {
  return (
    <h3 className={`subtitle ${size && "subtitle--small"}`} tabIndex={tabIndex}>
      {children}
    </h3>
  );
}
