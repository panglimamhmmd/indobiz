import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  try {
    if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) {
      throw new Error("API URL is not defined in environment variables.");
    }

    return new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
      }),
    });
  } catch (error) {
    console.error("Error creating Apollo Client:", error);
    throw error; // Re-throw the error if you need to fail the operation
  }
});
