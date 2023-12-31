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
  redirectTo: string;
};

export default function CardContent({
  ariaLabel,
  heading,
  subtitle,
  paragraph,
  buttonLabel,
  redirectTo,
}: Props) {
  return (
    <div className={`card-content`} aria-label={ariaLabel}>
      <Shape>
        <Heading tabIndex={1}>{heading}</Heading>
        <Subtitle tabIndex={1}>{subtitle}</Subtitle>
        <Paragraph tabIndex={1}>{paragraph}</Paragraph>
        <Button href={redirectTo} target="_blank" ariaLabel={buttonLabel}>
          {buttonLabel}
        </Button>
      </Shape>
    </div>
  );
}
