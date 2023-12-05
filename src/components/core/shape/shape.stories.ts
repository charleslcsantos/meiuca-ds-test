import type { Meta, StoryObj } from "@storybook/react";
import Shape from "./Shape";

const meta = {
  title: "Core/Shape`",
  component: Shape,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Shape>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: "Shape",
  },
};
