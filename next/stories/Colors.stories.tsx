import type { Meta, StoryObj } from "@storybook/react";

import Text from "@/components/Text";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Typography/Colors",
  component: Text,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: { children: "" },
  storyName: "Every Heading",
  render: () => (
    <div className="w-full p-7">
      <Text fontColor="primary" as="h1">
        Lorem Ipsum text ( Primary Color ) #23E588
      </Text>

      <Text fontColor="black" as="h1">
        Lorem Ipsum text ( Black Color ) #FFFFFF
      </Text>

      <Text fontColor="grey" as="h1">
        Lorem Ipsum text ( Grey Color ) #EEEEEE
      </Text>
    </div>
  ),
};
