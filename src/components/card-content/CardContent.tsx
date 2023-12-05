import Subtitle from "../core/Subtitle/Subtitle";
import Heading from "../core/heading/Heading";
import Paragraph from "../core/paragraph/Paragraph";
import Shape from "../core/shape/Shape";
import Button from "../core/button/Button";
import "./CardContent.scss";

type Props = {
  ariaLabel?: string;
  heading: string;
  subtitle: string;
  paragraph: string;
  buttonLabel: string;
};

export default function CardContent({
  ariaLabel,
  heading,
  subtitle,
  paragraph,
  buttonLabel,
}: Props) {
  return (
    <div className={`card-content`} aria-label={ariaLabel}>
      <Shape>
        <Heading>{heading}</Heading>
        <Subtitle>{subtitle}</Subtitle>
        <Paragraph>{paragraph}</Paragraph>
        <Button>{buttonLabel}</Button>
      </Shape>
    </div>
  );
}
