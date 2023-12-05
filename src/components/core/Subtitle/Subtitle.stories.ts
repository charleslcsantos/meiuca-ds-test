import type { Meta, StoryObj } from "@storybook/react";
import Subtitle from "./Subtitle";

const meta = {
  title: "Core/Subtitle`",
  component: Subtitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Subtitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "small",
    children: "Subtitle",
  },
};
