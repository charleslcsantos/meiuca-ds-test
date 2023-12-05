import type { Meta, StoryObj } from "@storybook/react";
import CardContent from "./CardContent";

const meta = {
  title: "Components/Card Content",
  component: CardContent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    heading: "Heading",
    buttonLabel: "buttonLabel",
    paragraph: "paragraph",
    subtitle: "subtitle",
  },
};
