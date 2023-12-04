import Subtitle from "../core/Subtitle/Subtitle";
import Heading from "../core/heading/Heading";
import Paragraph from "../core/paragraph/Paragraph";
import Shape from "../core/shape/Shape";
import Button from "../core/button/Button";
import "./CardContent.scss";

type Props = {
  ariaLabel?: string;
};

export default function CardContent({ ariaLabel }: Props) {
  return (
    <div className={`card-content`} aria-label={ariaLabel}>
      <Shape>
        <Heading>Heading</Heading>
        <Subtitle>Subtitle</Subtitle>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Paragraph>
        <Button>Primary Button</Button>
      </Shape>
    </div>
  );
}
