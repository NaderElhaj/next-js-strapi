# Tailwind documentation

TailwindCSS is a utility-first CSS framework that provides low-level utility classes to help you build completely custom designs. One of the key features of TailwindCSS is its highly customizable configuration.

When configuring TailwindCSS, it's important to follow a few guidelines to ensure consistency and avoid potential issues:

- **Naming conventions**: Always use kebab-case for variable names. This means all lowercase letters with hyphens between words, like `my-variable-name`.

- **Extending the default configuration**: When adding custom values to your Tailwind configuration, always use the extend option. This will add your custom values without overriding the defaults. If you don't use extend, your custom values will replace the default values, which could lead to unexpected results.

Here's an example of how to extend the default configuration:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        "custom-color": "#123456",
      },
    },
  },
  variants: {},
  plugins: [],
};
```

## Integrating TailwindCSS with Next.js and next/font

When using TailwindCSS with Next.js, you might want to use custom fonts in your project. The next/font package makes it easy to add custom fonts to your Next.js application.

Here's how to integrate TailwindCSS with next/font:

In your root layout.tsx file, add your font with the next/font package. Make sure to add the variable option to the font setting, like this:

```javascript
import "./globals.css";
import localFont from "next/font/local";

const sherika = localFont({
  src: "./fonts/Sherika-Variable.ttf",
  display: "swap",
  variable: "--font-sherika", // <-- This is the important part
});
const gucina = localFont({
  src: [
    {
      path: "./fonts/Gucina-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gucina-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Gucina-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Gucina-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gucina", // <-- This is the important part
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sherika.className} ${gucina.className}`}>
        {children}
      </body>
    </html>
  );
}
```

In this example, Sherika and Gucina are the names of your fonts. You can also use Google Fonts, which is already integrated with next/font. Learn more about how to use Google Fonts with next/font [here](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts).

In your Tailwind configuration file, add the font names to the fontFamily section, like this:

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-gucina)"],
        body: ["var(--font-sherika)"],
      },
    },
  },
  variants: {},
  plugins: [],
};
```

In this example, `--font-gucina` and `--font-sherika` are the CSS variables that hold the font names.

### Usage with Storybook

You'll need to add the fonts to the preview-head.html file in the .storybook directory. Here's an example:

```html
<style>
  @font-face {
    font-family: "Gucina";
    src: url("../app/fonts/Gucina-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Gucina";
    src: url("../app/fonts/Gucina-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Gucina";
    src: url("../app/fonts/Gucina-SemiBold.woff") format("woff");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Gucina";
    src: url("../app/fonts/Gucina-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Sherika";
    src: url("../app/fonts/Sherika-Variable.ttf") format("truetype-variations");
    font-weight: 100 900;
  }
  :root {
    --font-gucina: "Gucina", sans-serif;
    --font-sherika: "Sherika", sans-serif;
  }
</style>
```

## Formating markdown with Tailwind

TailwindCSS provides a plugin called `typography` that makes it easy to format markdown content. To use this plugin, you'll need to install the `@tailwindcss/typography` package and add it to your Tailwind configuration file, you can learn more about this plugin [here](https://tailwindcss.com/docs/typography-plugin).
