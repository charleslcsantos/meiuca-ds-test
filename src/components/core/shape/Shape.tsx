import "./Shape.scss";

type Props = {
  children: React.ReactNode;
};

export default function Shape({ children }: Props) {
  return <div className={`shape`}>{children}</div>;
}
