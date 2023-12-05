import type { Meta, StoryObj } from "@storybook/react";
import Paragraph from "./Paragraph";

const meta = {
  title: "Core/Paragraph`",
  component: Paragraph,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "small",
    children: "Paragraph",
  },
};
