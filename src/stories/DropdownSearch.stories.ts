import type { Meta, StoryObj } from "@storybook/react";
import DropdownSearch from "../components/DropdownSearch";

const meta: Meta<typeof DropdownSearch> = {
  component: DropdownSearch,
  title: "Dropdown",
  argTypes: {
    multiple: {
      control: "boolean",
      options: [true, false],
    },
    theme: {
      control: { type: "radio" },
      options: ["dark", "light"],
    },
    searchable: {
      control: "boolean",
      options: [true, false],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Search: Story = {
  args: {
    multiple: true,
    searchable: true,
    theme: "light",
  },
};
