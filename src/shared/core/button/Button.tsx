import "./button.scss";

type Props = {
  label: string;
  type?: "primary";
};

export default function Button({ label }: Props) {
  return <button className="button">{label}</button>;
}
