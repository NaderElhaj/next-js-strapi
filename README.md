![Frame 18496](https://github.com/Expertify/quick-start-full-custom-next-strapi/assets/8604600/08d88bda-e3a5-40c7-80be-7222565be43b)

# Introduction

This repository contains a boilerplate project designed to streamline the process of starting a new web project within our organization. The boilerplate is built around a specific tech stack: Next.js, Strapi, TailwindCSS, and Storybook.

The primary goal of this boilerplate is to provide a solid starting point for a fully customizable website that can be easily managed and updated by end users via the Strapi CMS.

Here's a brief overview of the technologies used:

- Next.js: A JavaScript framework that enables features such as server-side rendering and static site generation for React-based web applications.
- Strapi: A flexible, open-source Headless CMS that gives developers the freedom to choose their favorite tools and frameworks while also allowing end users to manage and distribute their content.
- TailwindCSS: A utility-first CSS framework for rapidly building custom user interfaces.
- Storybook: An open-source tool for developing UI components in isolation, making it easier to build and test the user interface of the application.

The project is structured into three main directories: one for Next.js, one for Strapi, and an optional one for Minio, which is used for asset storage but can be replaced with any S3 compatible storage.

To maintain code quality and consistency, we enforce the use of ESLint and Prettier with a predefined configuration included in the repository.

The following sections will provide more detailed information about each component of the project and instructions on how to use this boilerplate to start a new project.

## Initial Setup

Before you start coding, it's important to set up ESLint and Prettier. These tools help ensure that your code is consistent and free of common errors.

### Installing ESLint and Prettier Extensions in VSCode

Open VSCode and go to the Extensions view (you can use the shortcut `Ctrl+Shift+X`).

In the search bar, type `ESLint` and install the extension by `Microsoft`.

Next, search for `Prettier - Code formatter` and install the extension by `Prettier`.

### Using the ESLint and Prettier Configurations in the Repo

The repository includes configuration files for both `ESLint` and `Prettier`. These configurations define a set of rules for your code.

The `ESLint` configuration file is `.eslintrc.js`. `ESLint` helps you catch errors and fix them before they cause problems.

The `Prettier` configuration file is `.prettierrc`. `Prettier` is a code formatter that ensures your code follows a consistent style.

To use these configurations:

1. Open your project in VSCode.

2. Go to the settings (you can use the shortcut Ctrl+,).

3. Search for `ESLint: Run` and set it to `onType`. This will run ESLint every time you save a file.

4. Search for `Editor: Format On Save` and make sure it's `checked`. This will run Prettier every time you save a file.

Now, every time you save a file, ESLint will check your code for errors and Prettier will format your code according to the defined style.

## Phase 1: Tailwind Configuration

The first step in setting up your project involves configuring TailwindCSS. This utility-first CSS framework is highly customizable and allows you to define your design system upfront.

In this phase, you'll be setting up your project-specific colors and fonts. If there are colors or fonts that are specific to your project and not included in the default Tailwind configuration, you'll need to add them manually.

Detailed instructions on how to extend the default configuration can be found [here](docs/tailwind.md).

## Phase 2: Creating Basic Components

In this phase, you'll start building the basic components of your website. These are the small, reusable parts of your interface, such as buttons, form elements, or navigation items.

When designing these components, **it's important to find a balance between customization and simplicity**. While components should be flexible enough to accommodate different use cases, avoid over-customization as it can lead to inconsistencies and potential issues.

A good rule of thumb is to make components configurable to the extent that they can have different variants (e.g., a button could have a 'primary' and 'secondary' variant), but avoid adding settings for very specific things that are unlikely to be used across different instances of the component. This approach ensures that the components remain consistent with the overall design and are easy to use across the project.

You can learn more about how to create components [here](docs/components.md).

## Phase 3: Building Sections

After creating the basic components, you can start building larger sections of your website by combining these components. This could be a header, a footer, a blog post layout, or any other distinct part of your website.

Again, the principle of balancing customization and simplicity applies. Sections should be modular and flexible for reuse, but not overly complex or customizable to the point where they become difficult to manage or inconsistent with the overall design.

Everything explained in the previous section about components also applies to sections. The only things to keep in mind are:

- Sections names should always end with 'Section' (e.g., `HeaderSection`, `FooterSection`, etc.)
- Sections should be placed in the `/sections` directory

## Phase 4: Integrating Strapi

First thing first, you need to look at the [official Strapi documentation](https://docs.strapi.io/dev-docs/intro) to understand how to use the CMS.

Once you have a basic understanding of how Strapi works, you can start integrating it into your project.

Integrating Strapi is very similar to phase 2 and 3. There is 3 "types" we are going to use in Strapi:

- Collection types: This is where you define structures that can be repeated (e.g., blog posts, products, pages, etc.)
- Single types: This is where you define structures that can only be used once (e.g., navbar, footer, etc.)
- Components: This is where you define structures that can be used in other structures (e.g., a button component that can be used in a blog post, or an entire section that can be used in a page)

In the same spirit as phase 2 and 3, you will create `Components` and `Sections` in the Components type. You would create Components for small piece of configuration that will be reused by other Sections. You would create Sections for bigger piece of configuration that will be reused by Single types or Collection types.

Here is an example from the Mytaverse project:

<img width="447" alt="CleanShot 2023-07-25 at 14 51 31@2x" src="https://github.com/Expertify/quick-start-full-custom-next-strapi/assets/8604600/72538132-7fb8-4ec1-bf17-ed5173122980">

### Simple example

We are going to create a Page type, then we are going to make it so you can add any Section to it. We are also going to create a Component, and a Section that uses this Component. Then we are going to query the data from Strapi and display it in Next.js.

#### Creating the Page type

Go to the Content-Types Builder in Strapi, and create a new Collection type called `Page`. Then add a `Title` field of type `Text`, a description field of type `Text`, a `Path` field, and a `Slug` field of type `UID`. Make sure to check the `Required` checkbox for all fields. For the `Slug` field, you may select the `Title` field as the attached field, what this does is that it will automatically generate a slug based on the title of the page.

Note that in the example we are not using the [navigation plugin](https://market.strapi.io/plugins/strapi-plugin-navigation), but you can use it if you want to, it's just a bit more complicated to set up, but offers a better experience for the end user.

This is just a very basic setup for the page, you may want to add more metadata to it, such as a `Description` field, a `Keywords` field, etc.

There is one last thing to add, which is the most important part, it's the `Dynamic Zone`. This is where you will be able to add any Section to your page. So add a `Dynamic Zone` field, and call it `Sections`. Once you have added it, you need to define what Sections can be added to it. To do that, click on the `Add a component` field, and add a new `Component` to it. Then select the `Section` component.

Here is a full example of a Page from the Mytaverse project:

<img width="1270" alt="CleanShot 2023-07-25 at 18 21 18@2x" src="https://github.com/Expertify/quick-start-full-custom-next-strapi/assets/8604600/96ee9bf0-53d7-4ec1-82b4-93e6f9840e6c">

Right now we don't have any Sections, so let's create one.

#### Creating a Section

Go to the Content-Types Builder in Strapi, and create a new Component, call it whatever you want, in this example we are going to call it `TitleWithContent`. Then add the necessary fields to it. In this example we want to have a `Title` field of type `Text`, and a `Content` field of type `Text`, a `Button` and a `Variant`.
The thing is, we don't want to define what is a Button for every Section, we want to define it once, and reuse it everywhere. So we are going to create a Component for it.
The same way you create a `Section` component, you can create a `Component` component. So create a new Component, call it `Button`, and add the necessary fields to it. In this example we want to have a `Label` field of type `Text`, and a `Link` field of type `Text`.
Next in our section we can add a `Button` field of type `Component`, and select the `Button` component we just created.

Note: Strapi imposes a limit of depth of 2 for Components, so you can't have a Component inside a Component inside a Component by using the UI builder. But you can do it by editing the JSON directly. All the structure of your components is stored in `src/components/(sections|components)/[name].json`.

Here is a full example of a Section from the Mytaverse project:

<img width="1288" alt="CleanShot 2023-07-25 at 18 27 57@2x" src="https://github.com/Expertify/quick-start-full-custom-next-strapi/assets/8604600/51059ef6-f39a-4b26-ab7d-e9d300ab8589">

#### Querying the data from Strapi

Just before that, don't forget to publish your Page, else it won't be available in the API.

Secondly you need to allow public access to your API, to do that go to the `Roles` settings, and for the Public role, check the `find` and `findOne` checkbox for the Page type (and or any other type you wish to be available publicly).

![CleanShot 2023-07-25 at 18 29 31@2x](https://github.com/Expertify/quick-start-full-custom-next-strapi/assets/8604600/13776468-7251-40aa-8b5a-514d32de46a7)

Now that we have our data in Strapi, we need to query it from Next.js. To do that, we are going to use the [GraphQL API](https://docs.strapi.io/dev-docs/api/graphql). You can access the GraphQL playground by going to `http://localhost:1337/graphql` (or whatever your Strapi URL is).

You will add your queries in the `next/app/_strapi` directory. In this example we are going to create a `pages.ts` file, and add the following query:

```typescript
const QUERY = `
query Pages($Path: String!) {
  pages: pages(filters: { Path: { eq: $Path } }) {
    data {
      attributes {
        Title
        Description
        NavbarVariant
        Layout {
          ... on ComponentSectionsTitleWithContent {
            __typename
            RequiredTitle: Title {
              ${TITLE_QUERY}
            }
            RequiredContent: Content
            OptionalSimpleButton: Button {
              ${SIMPLE_BUTTON_QUERY}
            }
            TitleWithContentVariant: Variant
          }
        }
      }
    }
  }
}
`;
```

Let's break it down:

- `Pages($Path: String!)`: This is the name of the query, and the variables it accepts. In this case we only accept a `Path` variable, which is a `String`.
- `pages(filters: { Path: { eq: $Path } })`: This is the name of the query, and the filters it accepts. In this case we only accept a `Path` filter, which is a `String`. When a user navigate to a page, we will pass the path of the page to this query.
- `data { attributes { ... } }`: This is the data we want to retrieve from the query. In this case we want to retrieve the `Title`, `Description`, `NavbarVariant`, and `Layout` of the page.
- `Layout { ... }`: This is the data we want to retrieve from the `Layout` field of the page. In this case we want to retrieve the `Title`, `Content`, `Button`, and `Variant` of the `TitleWithContent` section, look at the `...`, it's a GraphQL fragment, for all components that you add to your page, you need to add a fragment for it, so that you can retrieve the data from it.
- `__typename`: This is a special field that we are going to use to know what component we are dealing with in the response. In this case we are going to use it to know that we are dealing with a `TitleWithContent` section in the response.

Now let's actually query the data:

```typescript
export const getPage = async (pagePath: string) => {
  pagePath = pagePath.toLowerCase();
  if (pagePath === "/index") {
    pagePath = "/";
  }

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: QUERY,
      variables: { Path: pagePath },
    }),
    next: { revalidate: 30 },
  });

  const { data } = await response.json();

  return {
    statusCode: response.status,
    data: data,
  };
};
```

Let's break it down:

- `pagePath = pagePath.toLowerCase();`: We want to make sure that the path is lowercase, because we want to be able to query `/about` and `/About` and get the same result.
- `if (pagePath === "/index") { pagePath = "/"; }`: We want to make sure that `/index` and `/` are the same page. This is an issue I found, when you navigate **client-side** to `/` nextjs will return that the current path is `/index`, but when you navigate **server-side** to `/` nextjs will return that the current path is `/`.
- `const response = await fetch(ENDPOINT, { ... });`: We are using the `fetch` API to make a `POST` request to the GraphQL endpoint of Strapi. We are passing the `QUERY` we defined earlier, and the `variables` we want to use in the query. **Important** do NOT use axios or any other library to make the request. Fetch is integrated in Next.js, and you don't need to import anything to use it. It offers request deduplication, and caching, which is very important for performance. Meaning that if you make the same request multiple times, it will only make one request to Strapi, and the second time it will return the cached result.
- `next: { revalidate: 30 },` This is a special field that we are going to use to tell Next.js to cache the result for 30 seconds.
- `const { data } = await response.json();`: We are parsing the response as JSON, and extracting the `data` field from it.
- `return { statusCode: response.status, data: data, };`: We are returning the status code of the response, and the data.

#### Displaying the data in Next.js

Create a new page in `next/app/[[...slug]]/page.tsx`, and add the following code:

```typescript
interface PageProps {
  params: {
    slug: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const slugAsPath = `/${params.slug ? params.slug.join("/") : ""}`;
  const page = await getPage(slugAsPath);

  const { attributes } = page.data.pages.data[0];

  return (
    <div className="flex flex-col">
      {attributes.Layout.map((componentData: any, index: number) => {
        const ComponentData =
          SECTION_MAPPING[
            componentData.__typename as keyof typeof SECTION_MAPPING
          ];
        if (!ComponentData) {
          console.warn(
            `No component found for typename "${componentData.__typename}".`
          );
          return null;
        }
        const { component: Component, mapProps } = ComponentData;
        try {
          const props = mapProps(componentData);
          // @ts-ignore
          return <Component key={index} {...props} />;
        } catch (e) {
          console.error(
            `Error while rendering component "${componentData.__typename}".`
          );
          console.error(e);
          return <></>;
        }
      })}
    </div>
  );
}
```

For each sections in the `Layout` dynamic zone, we are going to get the corresponding component based on the `__typename`, and convert the data from Strapi to props that the component can use.

Here is a example of the SECTION_MAPPING:

```typescript
const SECTION_MAPPING: {
    ComponentSectionsTitleWithContent: {
    component: TitleWithContentSection, // <-- The actual React component
    mapProps: ({
      RequiredTitle, // <-- The data from Strapi
      RequiredContent,
      OptionalSimpleButton,
      TitleWithContentVariant,
    }: any): TitleWithContentSectionProps => ({ // <-- The props that the component can use
      sectionBgVariant: TITLE_WITH_CONTENT_VARIANTS_MAPPING[
        TitleWithContentVariant as keyof typeof TITLE_WITH_CONTENT_VARIANTS_MAPPING
      ] as "black" | "white",
      title: parseTitle(RequiredTitle)?.text,
      titleHighlightedIndexes:
        parseTitle(RequiredTitle)?.highlightedWordIndexes,
      titleAs: parseTitle(RequiredTitle)?.seoTag,
      titleColor: TitleWithContentVariant === "Black" ? "white" : "black",
      content: RequiredContent,
      contentColor: TitleWithContentVariant === "Black" ? "white" : "black",
      hasAButton:
        OptionalSimpleButton !== null && OptionalSimpleButton !== undefined,
      buttonText: OptionalSimpleButton?.Label,
      buttonHref: OptionalSimpleButton?.Link,
    }),
  }
}
```

And voila, you have a fully dynamic page, where you can add any Section you want, and configure it as you want. If you want a full example look at the myta repo.

Note that you should also have something like this in your page to render the correct metadata such as title, description, etc.

```typescript
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  /*
  When rendering a route, Next.js will automatically deduplicate fetch requests
  for the same data across generateMetadata, generateStaticParams, Layouts, Pages,
  and Server Components. React cache can be used if fetch is unavailable.
  So it is safe to call getPage here and in the Page component.
  */
  const slugAsPath = `/${params.slug ? params.slug.join("/") : ""}`;
  const page = await getPage(slugAsPath);
  if (page.statusCode !== 200) {
    return {
      title: "500",
      description: "Internal server error.",
    };
  }
  if (
    !page.data ||
    !page.data.pages ||
    !page.data.pages.data ||
    !page.data.pages.data[0]
  ) {
    return {
      title: "404",
      description: "Page not found.",
    };
  }

  const { attributes } = page.data.pages.data[0];

  return {
    title: attributes.Title,
    description: attributes.Description,
  };
}
```

## Heads up about collaboration

Always create a Draft pull request if your pull request is not ready to be merged.

<img width="330" alt="CleanShot 2023-07-26 at 10 57 23@2x" src="https://github.com/Expertify/quick-start-full-custom-next-strapi/assets/8604600/53313ffa-6721-463f-b7d9-fa2858f2b09f">

# Deploying

## Deploying Next.js

There isn't anything complicated to do, just connect the repo with vercel, don't forget to select the correct folder `next`, and add the necessary environment variables. That's it.

## Deploying Strapi

It's a bit more complicated, but not that much. You need to create a new app on fly.io, I'd suggest you take a look at [their documentation](https://fly.io/docs/) first. Next you'll need to add the necessary environment variables for Github Actions, look at the `.github/workflows`. You'll also need to add the following env variables to your fly.io app:

Those one are just random strings, they should never be shared to anyone, and should be different for each project.

- `ADMIN_JWT_SECRET`
- `API_TOKEN_SALT`
- `APP_KEYS`
- `JWT_SECRET`
- `TRANSFER_TOKEN_SALT`

Those are specific to the project, look at the fly.io documentation to know how to create a postgres database.

- `DATABASE_CLIENT`
- `DATABASE_URL`

- `NODE_ENV` `-> production or staging`

Those depends on where you want the assets from strapi to go to, you may use Minio, or any S3 compatible storage.

- `MINIO_ACCESS_KEY`
- `MINIO_BUCKET`
- `MINIO_ENDPOINT`
- `MINIO_SECRET_KEY`

Or you may use AWS S3 directly:

- `AWS_ACCESS_KEY_ID`
- `AWS_ACCESS_SECRET`
- `AWS_BUCKET`
- `AWS_REGION`

Please take a look at `strapi/config/env/(production|staging)/plugin.js` to see how to configure the asset storage.

Lastly you will need to update the app name in `.github/workflows/strapi-fly.yaml` and `.github/workflows/minio-fly.yaml`. Also note that if you do not want to use minio, you can remove the `minio-fly.yaml` file.

Once you have choosed your storage, update the `strapi/config/middleware.js`, and add the domains where your assets will be served from in the `img-src` and `media-src` directives. But also in the next.js `next.config.js` file, in the `images/domains` array.
