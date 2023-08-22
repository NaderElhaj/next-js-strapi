import type { Meta, StoryObj } from "@storybook/react";

import Text from "@/components/Text";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Typography/Text",
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
        Lorem Ipsum text ( Primary Color )
      </Text>
      <Text as="h2">Lorem Ipsum is simply dummy text </Text>
      <Text as="p">Lorem Ipsum is simply dummy text </Text>
      ------------------------------------------------------------------
      <Text bold>Lorem Ipsum is simply dummy text </Text>
      <Text>Lorem Ipsum is simply dummy text </Text>
      ------------------------------------------------------------------
      <Text oblique>Lorem Ipsum is simply dummy text (oblique) </Text>
      <Text oblique={false}>
        Lorem Ipsum is simply dummy text (not oblique)
      </Text>
      ------------------------------------------------------------------
      <Text as="h1" fontFamily="everett">
        Lorem Ipsum is simply dummy text
      </Text>
      <Text as="h2" fontFamily="everett">
        Lorem Ipsum is simply dummy text
      </Text>
      <Text as="p" fontFamily="everett">
        Lorem Ipsum is simply dummy text
      </Text>
      ------------------------------------------------------------------
      <Text as="h1" bold>
        Lorem Ipsum is simply dummy text
      </Text>
      <Text as="h2" bold>
        Lorem Ipsum is simply dummy text
      </Text>
      <Text as="p" bold>
        Lorem Ipsum is simply dummy text
      </Text>
    </div>
  ),
};

export const Grey: Story = {
  args: { children: "" },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#333333", // Replace this with your desired dark background color
        },
      ],
    },
  },
  storyName: "Every Heading",
  render: () => (
    <div className="w-full p-7">
      <Text fontColor="grey" as="h1">
        Lorem Ipsum is simply dummy text
      </Text>
      <Text fontColor="grey" as="h2">
        Lorem Ipsum is simply dummy text
      </Text>
      <Text fontColor="grey" as="p">
        Lorem Ipsum is simply dummy text
      </Text>
      ------------------------------------------------------------------
      <Text fontColor="grey" bold>
        Lorem Ipsum is simply dummy text
      </Text>
      <Text fontColor="grey">Lorem Ipsum is simply dummy text </Text>
      ------------------------------------------------------------------
      <Text fontColor="grey" oblique>
        Lorem Ipsum is simply dummy text (oblique)
      </Text>
      <Text fontColor="grey" oblique={false}>
        Lorem Ipsum is simply dummy text (not oblique)
      </Text>
      ------------------------------------------------------------------
      <Text fontColor="grey" as="h1" fontFamily="everett">
        Lorem Ipsum is simply dummy text
      </Text>
      <Text fontColor="grey" as="h2" fontFamily="everett">
        Lorem Ipsum is simply dummy text
      </Text>
      <Text fontColor="grey" as="p" fontFamily="everett">
        Lorem Ipsum is simply dummy text
      </Text>
      ------------------------------------------------------------------
      <Text fontColor="grey" as="h1" bold>
        Lorem Ipsum is simply dummy text
      </Text>
      <Text fontColor="grey" as="h2" bold>
        Lorem Ipsum is simply dummy text
      </Text>
      <Text fontColor="grey" as="p" bold>
        Lorem Ipsum is simply dummy text
      </Text>
    </div>
  ),
};
