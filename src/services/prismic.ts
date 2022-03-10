import { createClient } from "@prismicio/client";

export function getPrismicClient(req?: string | any | unknown) {
  const prismic = createClient(process.env.PRISMIC_ENDPOINT as string, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  // accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  return prismic;
}
