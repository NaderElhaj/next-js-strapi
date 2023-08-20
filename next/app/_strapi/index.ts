/// Should not have any path, just the domain
export const STRAPI_DOMAIN = process.env.NEXT_PUBLIC_STRAPI_DOMAIN;
/// The Strapi GraphQL path
export const STRAPI_GRAPHQL_PATH = process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_PATH;

if (!STRAPI_DOMAIN) {
  throw new Error("NEXT_PUBLIC_STRAPI_DOMAIN is not defined");
}
if (!STRAPI_GRAPHQL_PATH) {
  throw new Error("NEXT_PUBLIC_STRAPI_GRAPHQL_PATH is not defined");
}

export const ENDPOINT = `${STRAPI_DOMAIN}${STRAPI_GRAPHQL_PATH}`;
