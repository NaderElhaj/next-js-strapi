# Components documentation

By default, Next.js uses React Server Components. This new feature of React allows components to be rendered on the server and sent to the client as HTML. This can lead to performance improvements, as less JavaScript needs to be sent to the client.

However, there are some important considerations when using React Server Components:

- No Hooks: Server Components cannot use React Hooks. If you need to use Hooks in your component, you must make it a Client Component.

- Client Components: To make a component a Client Component, add `"use client"` as the first line of your component. Client Components are rendered on the client and can use Hooks.

```typescript
"use client";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export default MyComponent;
```

Read more about React Server Components [here](https://nextjs.org/docs/getting-started/react-essentials#server-components) and [here](https://www.patterns.dev/posts/react-server-components).

---

Define props as a separate type or interface. The name of the props should be `NameOfTheComponentProps` and they should always be exported.

```typescript
export interface ButtonProps {
  /**
   * label: The text displayed on the button
   */
  label: string;
}
```

Use arrow functions for component definitions. The name of the component and the file where it is defined should be in PascalCase and should match each other.

```typescript
const Button = ({ label }: ButtonProps) => {
  return <button>{label}</button>;
};
```

Always export the component as the default export.

```typescript
export default Button;
```

**Do not add default values to optional parameters, especially if the default values are just for testing. If you want to test the component, use Storybook's args.**

Always use `next/image` instead of a regular `<img>` tag for better performance and user experience.

```typescript
import Image from "next/image";

const MyImageComponent = () => {
  return (
    <Image
      src="/path/to/image.jpg"
      alt="Description"
      width={500}
      height={300}
    />
  );
};

export default MyImageComponent;
```

Components should always be in the `/components` folder.

## Naming Conventions

Follow these naming conventions in your project:

- **Components**: Use PascalCase for component names. The names should be descriptive and meaningful. For example, UserProfile for a component that displays user profile information.

- **Files**: Name your files using PascalCase, matching the component name. For example, if you have a component named UserProfile, the file should be named UserProfile.tsx.

- **Props**: Use descriptive names for props to clearly indicate their purpose. Avoid abbreviations or acronyms unless they are widely understood. For example, instead of usr, use user.

- **State variables**: Prefix state variables with is, has, or should to denote boolean values. For example, isActive, hasError, shouldRender.

- **Event handlers**: Use handle as a prefix for event handler functions. For example, handleClick, handleInputChange.

- **CSS classes**: Use lowercase letters and hyphens for CSS class names. For example, .my-class-name.

- **Constants**: Use uppercase letters with underscores to represent constants in JavaScript. For example, API_URL, MAX_RESULTS.

- **Utility functions**: Choose descriptive names that indicate their purpose or functionality. For example, formatDate, generateUniqueId.

## Using Storybook

Storybook is a tool for developing UI components in isolation. It allows you to visualize different states of your components and interactively develop and test them.

Here's how to use Storybook:

- Create a new file in the `stories` directory with the same name as your component, example `ComponentName.stories.tsx`, it must be a `.stories.tsx` file.

- In this file, define a default export with the title of your component and a component property that references your component.

- Define one or more "stories" by exporting functions that return rendered elements. You can use the args property to define the props for each story.

Here's an example:

```typescript
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonProps } from "../components/Button";

export default {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Click me",
  },
};
```

**Important, if you pass a picture as a prop, do not use a link where the image changes every time you refresh the page, this will make so each time the UI is tested by chromatic, it will be different, thus will need manual intervention each time.**

In this example, Primary is a story for Button. You can add as many stories as you want to demonstrate different states of your component.

If you wish to add something surrounding the component, you can use the decorators property. For example, if you want to add a border around the component, you can do this:

```typescript
export const Primary: Story = {
  args: {
    label: "Click me",
  },
  decorators: [
    (Story) => (
      <div className="border border-gray-300 p-4">
        <Story />
      </div>
    ),
  ],
};
```

If you want to add interactivity to your stories, you can use the actions property. For example, if you want to log a message when the button is clicked, you can do this:

```typescript
export default {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
};
```

If you need more control over the props of your component, or need to pass props that must be initialized in the story, you can use the render property. For example, maybe you need to pass a function to the onChange prop of your component. You can do this:

```typescript
export const Primary: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <Button {...args} onChange={setValue} />;
  },
};
```

### Specific Storybook features

#### A11y

Storybook has a built-in accessibility checker that can help you find accessibility issues in your components. This addon is enabled by default in this project.

You can find more information about this addon [here](https://storybook.js.org/addons/@storybook/addon-a11y/).

#### Pseudo States

This project includes a Storybook addon that allows you to add pseudo states to your components. This addon is enabled by default in this project.

You can find more information about this addon [here](https://storybook.js.org/addons/storybook-addon-pseudo-states/).

#### Designs

This project includes a Storybook addon that allows you to add the original designs to your components. This addon is enabled by default in this project.

**It is highly recommended to use this addon to add the original designs to your components.**

You can find more information about this addon [here](https://storybook.js.org/addons/@storybook/addon-designs/).
